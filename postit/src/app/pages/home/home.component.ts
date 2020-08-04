import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from "../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loadingError$ = this._userService.loadingError$;
  private _fetchUsers$: Observable<User[]> = this._userService.users$;
  public loggedInUser$ = this._authService.user$;

  constructor(private _userService: UserService, private _authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  get users$(): Observable<User[]> {
    return this._fetchUsers$;
  }
}
