import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TMDB_API_KEY } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class TmdbHandlerService {
  constructor(private http: HttpClient) {}

  search_title(title: String, page: number) {
    const url =
      'https://api.themoviedb.org/3/search/movie?api_key=' +
      TMDB_API_KEY +
      '&language=en-US&query=' +
      title +
      '&page=' +
      page;
    var res = this.http.get(url);
    return res;
  }
}
