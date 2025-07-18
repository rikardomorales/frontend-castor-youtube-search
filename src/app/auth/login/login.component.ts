import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.snackBar.open('¡Bienvenido! Has iniciado sesión.', 'Cerrar', { duration: 2500 });
          this.router.navigate(['/youtube']);
        },
        error: (err) => {
          this.snackBar.open(err.error.message || 'Usuario o contraseña incorrectos. Intenta de nuevo.', 'Cerrar', { duration: 3000 });
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
  }
} 