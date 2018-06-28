import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public login: User | null;

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user.auth.subscribe((userData:User) => {
      if(userData && userData.role) {
        this.login = userData;
      } else {
        this.login = null;
      }
    })
  }

  go(url: string) {
    this.router.navigateByUrl(url);
  }

}
