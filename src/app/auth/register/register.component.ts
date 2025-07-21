import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.snackBar.open('¡Usuario registrado exitosamente! Por favor inicia sesión para continuar.', 'Cerrar', { duration: 3000 });
          this.router.navigate(['/auth/login']);
          this.loading = false;
        },
        error: (err) => {
          let errorMessage = 'No se pudo registrar. Intenta de nuevo.';
          
          if (err.error && typeof err.error === 'string') {
            errorMessage = err.error;
          } else if (err.error && err.error.message) {
            errorMessage = err.error.message;
          } else if (err.message) {
            errorMessage = err.message;
          }
          
          this.snackBar.open(errorMessage, 'Cerrar', { duration: 3000 });
          this.loading = false;
        }
      });
    }
  }
} 