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
        next: () => {
          this.snackBar.open('¡Registro exitoso! Ahora puedes iniciar sesión.', 'Cerrar', { duration: 2500 });
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.snackBar.open(err.error.message || 'No se pudo registrar. Intenta de nuevo.', 'Cerrar', { duration: 3000 });
          this.loading = false;
        },
        complete: () => this.loading = false
      });
    }
  }
} 