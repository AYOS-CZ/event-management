import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { LoginOrContactComponent } from './login-or-contact/login-or-contact.component';
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginOrContactComponent
  ],
  declarations: [UnauthorizedComponent, HomeComponent, ConfirmationComponent, NotificationsComponent, HeaderComponent, FooterComponent, LoginOrContactComponent]
})
export class UtilsModule { }
