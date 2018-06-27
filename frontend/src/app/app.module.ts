import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserModule } from './user/user.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { UtilsModule } from './utils/utils.module';
import { OperatorPanelModule } from './operator-panel/operator-panel.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    OperatorPanelModule,
    UtilsModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient] 
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
