export class MediaList {
  page!: number;
  total_pages!: number;
  results!: Media[];

  constructor(data: any) {
    this.page = data.page;
    this.total_pages = data.total_pages;
    this.results = (data.results as Media[]).map((d: any) => {
      return new Media(d);
    });
  }
}

export class Media {
  id?: String;
  title?: String;
  poster_path?: String;
  release_date?: String;
  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.poster_path = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
    this.release_date = data.release_date;
  }
}
