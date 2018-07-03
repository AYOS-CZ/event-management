import { EventBookingOrderComponent } from './event-booking/event-booking-order/event-booking-order.component';
import { EventBookingListComponent } from './event-booking/event-booking-list/event-booking-list.component';
import { AccountComponent } from './user/account/account.component';
import { AuthGuardOperatorService } from './shared/auth-guard-operator.service'; 
import { EventListOperatorComponent } from './operator-panel/event-list/event-list.component';
import { CreateEventComponent } from './admin-panel/events/create-event/create-event.component';
import { EventListComponent } from './admin-panel/events/event-list/event-list.component';
import { EventDetailComponent } from './admin-panel/events/event-detail/event-detail.component';
import { HealingCreateComponent } from './admin-panel/healing/healing-create/healing-create.component';
import { HealingDetailComponent } from './admin-panel/healing/healing-detail/healing-detail.component';
import { CreateLectureComponent } from './admin-panel/lecture/create-lecture/create-lecture.component';
import { HealingListComponent } from './admin-panel/healing/healing-list/healing-list.component';
import { LectureListComponent } from './admin-panel/lecture/lecture-list/lecture-list.component';
import { LectureDetailComponent } from './admin-panel/lecture/lecture-detail/lecture-detail.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { Route } from "@angular/router";
import { HomeComponent } from "./utils/home/home.component";
import { UnauthorizedComponent } from './utils/unauthorized/unauthorized.component';
import { AuthGuardAdminService } from './shared/auth-guard-admin.service';
import { EventListUserComponent } from './user-panel/event-list/event-list.component';
import { EventOperationComponent } from './operator-panel/event-operation/event-operation.component';
import { EventDetailUserComponent } from './user-panel/event-detail/event-detail.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

export const routes: Route[] = [
    //general utils
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'personal/account', component: AccountComponent, canActivate: [AuthGuardAdminService, AuthGuardOperatorService, AuthGuardService] },

    //event booking
    { path: 'booking', component: EventBookingListComponent },
    { path: 'booking/order', component: EventBookingOrderComponent },

    //admin panel
    { path: 'admin/lectures/:id', component: LectureDetailComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/lectures', component: LectureListComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/lectures/new', component: CreateLectureComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/healing/:id', component: HealingDetailComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/healing', component: HealingListComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/healing/new', component: HealingCreateComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/events/:id', component: EventDetailComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/events', component: EventListComponent, canActivate: [AuthGuardAdminService] },
    { path: 'admin/events/new', component: CreateEventComponent, canActivate: [AuthGuardAdminService] },

    //operator panel
    { path: 'operator/events/:id', component: EventOperationComponent, canActivate: [AuthGuardOperatorService] },
    { path: 'operator/events', component: EventListOperatorComponent, canActivate: [AuthGuardOperatorService] },

    //user panel
    { path: 'personal/events', component: EventListUserComponent, canActivate: [AuthGuardService] },
    { path: 'personal/events/:id', component: EventDetailUserComponent, canActivate: [AuthGuardService] }


]