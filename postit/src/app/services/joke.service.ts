import { Joke } from './../models/joke.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private jokeUrl: string = 'https://official-joke-api.appspot.com/jokes/programming/random';

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get<Joke>(this.jokeUrl);
  }
}


// ["hip", "hip"]
// hip hip array