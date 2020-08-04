import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GifService {
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  getGif() {
    return this.http.get(`${this.baseUrl}/random`, { params: this.paramsMapper("oops") });
  }

  paramsMapper(tags) {
    var params = { api_key: "72kbsnk2HBcaBOdUOr2iC6BNguNG1O8v", q: "" };
    if (tags) params.q = tags.constructor === Array ? tags.join('+') : tags;
    return params;
  }
}

