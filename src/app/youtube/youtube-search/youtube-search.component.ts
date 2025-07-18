import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YouTubeService } from '../youtube.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YouTubeSearchComponent {
  searchForm: FormGroup;
  searchResults: any[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private youTubeService: YouTubeService,
    private snackBar: MatSnackBar
  ) {
    this.searchForm = this.fb.group({
      query: ['', Validators.required],
      maxResults: [10, [Validators.required, Validators.min(1), Validators.max(50)]]
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.loading = true;
      this.youTubeService.searchVideos(this.searchForm.value).subscribe({
        next: (response) => {
          this.searchResults = response.results;
          if (this.searchResults.length === 0) {
            this.snackBar.open('No se encontraron videos para tu búsqueda.', 'Cerrar', { duration: 2500 });
          }
        },
        error: (err) => {
          this.snackBar.open(err.error.message || 'Ocurrió un error al buscar videos.', 'Cerrar', { duration: 3000 });
        },
        complete: () => this.loading = false
      });
    }
  }

  onImageError(event: any) {
    // Si la imagen falla, usar una imagen por defecto
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTIwIDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNENzA3MDciIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI2MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0Q3MDcwNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWluaWF0dXJhPC90ZXh0Pgo8L3N2Zz4K';
  }
} 