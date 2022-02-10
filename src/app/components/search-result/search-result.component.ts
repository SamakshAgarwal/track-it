import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/models/media';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() media!: Media;
  constructor() {}

  ngOnInit(): void {}
}
