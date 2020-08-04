import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private _authService: AuthenticationService) { }

  public loggedInUser$ = this._authService.user$;

  logout() {
    this._authService.logout();
  }

  ngOnInit(): void {
  }

}
