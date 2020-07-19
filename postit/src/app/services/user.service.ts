import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment.prod';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Comments } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  get users$(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}/User/`)
      .pipe(catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
        map((list: any[]): User[] => list.map(User.fromJSON)
        )
      );
  }

  addNewPost(post: Post) {
    return this.http.post(`${environment.apiUrl}/User`, post.toJSON());
  }

  addNewComment(post: Post, comment: Comments) {
    return this.http.post(`${environment.apiUrl}/User/post/${post.title}/comments`, comment.toJSON());
  }

  removePost(comment: Comments) {
    return this.http.delete(`${environment.apiUrl}/User`, comment.toJSON());
  }
}
