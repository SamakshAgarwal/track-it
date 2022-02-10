import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Media, MediaList } from 'src/app/models/media';
import { TmdbHandlerService } from 'src/app/services/tmdb-handler.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  searchFormControl = new FormControl();
  mediaList$: Subject<MediaList> = new Subject();
  mediaList!: MediaList;
  constructor(private tmbd_handler: TmdbHandlerService) {}

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((text) => {
        if (text) this.search();
        else {
          this.mediaList.results = [];
          this.mediaList$.next(this.mediaList);
        }
      });
  }

  search() {
    this.tmbd_handler
      .search_title(
        this.searchFormControl.value,
        this.mediaList ? this.mediaList.page + 1 : 1
      )
      .subscribe((data) => {
        this.mediaList = new MediaList(data);
        this.mediaList$.next(this.mediaList);
        console.log(this.mediaList);
      });
  }
}
