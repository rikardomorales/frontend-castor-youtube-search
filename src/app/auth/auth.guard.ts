import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router, 
    private snackBar: MatSnackBar
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.snackBar.open('Por favor inicia sesión para acceder a esta sección.', 'Cerrar', { duration: 2500 });
      return this.router.createUrlTree(['/auth/login']);
    }
  }
} 