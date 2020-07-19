import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Comments } from 'src/app/models/comments.model';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();
  public post: FormGroup;
  public errorMessage: string = '';
  public confirmationMessage: string = '';

  constructor(private router: Router, private formbuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.post = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      text: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  onSubmit() {
    let newPost: Post = new Post(this.post.value.title, this.post.value.text, new Array<Comments>(), new Date());
    this.newPost.emit(newPost);
    console.log(newPost)
    this._userService.addNewPost(newPost).pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    ).subscribe((post: Post) => {
      this.confirmationMessage = `a post with title: "${post.title}" was successfully added`;
    });

    this.router.navigate(["/home"]);
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    }
    if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
          characters (got ${errors.minlength.actualLength})`;
    }
  }
}
