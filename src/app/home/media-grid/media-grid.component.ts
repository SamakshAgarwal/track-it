import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss'],
})
export class MediaGridComponent implements OnInit {
  constructor() {}
  mediaList: ImageObject[] = [];
  imgs: string[] = [
    'assets\\images\\free-guy.jpg',
    'assets\\images\\invincible.jpg',
    'assets\\images\\mandalorian.jpg',
    'assets\\images\\shangchi.jpg',
  ];
  imageList: ImageObject[] = [];
  ngOnInit(): void {
    this.populateImageList();
  }

  populateImageList() {
    this.imgs.forEach((img) => {
      let im = new Image();
      im.src = img;
      let h = 0,
        w = 0;
      let dec: number = im.height / im.width;
      if (dec < 1) {
        h = 1;
        w = Math.ceil(1 / dec);
      } else {
        w = 1;
        h = Math.ceil(1 / dec);
      }
      this.imageList.push({ url: img, rowSpan: h, colSpan: w });
    });

    let list1: ImageObject[] = [],
      list2: ImageObject[] = [];
    for (let i = 1; i <= 100; i++) {
      let imo = this.imageList[Math.round(Math.random() * 3)];
      this.mediaList.push(imo)
    }
  }
}

interface ImageObject {
  url: string;
  colSpan: number;
  rowSpan: number;
}
