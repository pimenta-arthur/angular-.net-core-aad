import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoggedInGuard } from "./authentication/loggedInGuard";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard]
  },
];

export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);
