import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comments } from 'src/app/models/comments.model';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Output() public newComment = new EventEmitter<Comments>();
  @Input() public post: Post;
  @Input() public user: User;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  addComment(commentText: HTMLInputElement): boolean {
    const comment = new Comments(commentText.value, new Date());
    this.newComment.emit(comment);
    this._userService.addNewComment(this.post, new Comments(commentText.value, new Date())).subscribe();
    return false;
  }
}
