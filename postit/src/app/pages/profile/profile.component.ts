import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { map, filter, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _authService: AuthenticationService, private _userService: UserService) { }

  private _id: number;
  public user: User;
  private _fetchUsers$: Observable<User[]> = this._userService.users$;
  public loggedInUser$ = this._authService.user$;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params["id"];
    });
    this.user$.subscribe(user => user[0] ? this.user = user[0] : this.user = null);
  }

  get user$(): Observable<User[]> {
    return this._fetchUsers$
      .pipe(
        map(users => {
          let user = users.filter(user => user.id == this._id);
          return user;
        }))
    //   reduce((users) => users[0])
    // );
  }
}
