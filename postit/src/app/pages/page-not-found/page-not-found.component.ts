import { GifService } from './../../services/gif.service';
import { Joke } from './../../models/joke.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  providers: [JokeService]
})
export class PageNotFoundComponent implements OnInit {
  public joke: Joke = null;
  public random;
  public gif = null;

  constructor(private jokeService: JokeService, private gifService: GifService) { }

  ngOnInit() {
    this.random = Math.random();
    console.log(this.random)
    this.jokeService.getJoke().subscribe((data) => this.joke = data[0]);
    this.gifService.getGif().subscribe((data) => { this.gif = data; this.gif = this.gif.data.images.downsized_large; });
  }
}