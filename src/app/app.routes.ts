import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'youtube', canActivate: [AuthGuard], loadChildren: () => import('./youtube.module').then(m => m.YouTubeModule) },
  { path: 'auth', loadChildren: () => import('./auth.module').then(m => m.AuthModule) }
];
