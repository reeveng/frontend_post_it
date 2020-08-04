import { Joke } from './../models/joke.model';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private baseUrl: string = 'https://official-joke-api.appspot.com/jokes/programming/random';

  constructor(private http: HttpClient, private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  getJoke() {
    return this.http.get<Joke>(this.baseUrl);
  }
}
