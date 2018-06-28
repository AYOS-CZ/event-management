import { UserService } from './user/user.service';
import { ApiService } from './shared/api.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    translate: TranslateService,
    private api: ApiService,
    private user: UserService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    this.user.init();
    let auth = this.user.auth.getValue()
    if(auth && auth.role) {
      this.api.setAuth(auth);
    }

  }

  ngOnInit() {}
}
