import { AuthGuardService } from './shared/auth-guard.service';
import { Route } from "@angular/router";
import { HomeComponent } from "./utils/home/home.component";
import { UnauthorizedComponent } from './utils/unauthorized/unauthorized.component';

export const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'unauthorized', component: UnauthorizedComponent}
    // auth guarded component { path: 'path/to/component', component: ComponentName, canActivate: [AuthGuardService]},

]