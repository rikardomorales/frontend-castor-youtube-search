import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YouTubeService, SearchHistory } from '../youtube.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YouTubeSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: any[] = [];
  searchHistory: SearchHistory[] = [];
  loading = false;
  loadingHistory = false;

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

  ngOnInit() {
    this.loadSearchHistory();
  }

  loadSearchHistory() {
    this.loadingHistory = true;
    this.youTubeService.getSearchHistory().subscribe({
      next: (history) => {
        this.searchHistory = history;
        this.loadingHistory = false;
      },
      error: (err) => {
        this.snackBar.open('No se pudo cargar el historial de búsqueda.', 'Cerrar', { duration: 3000 });
        this.loadingHistory = false;
      }
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
          // Recargar historial después de una búsqueda exitosa
          this.loadSearchHistory();
        },
        error: (err) => {
          this.snackBar.open(err.error.message || 'Ocurrió un error al buscar videos.', 'Cerrar', { duration: 3000 });
        },
        complete: () => this.loading = false
      });
    }
  }

  onHistoryItemClick(historyItem: SearchHistory) {
    this.searchForm.patchValue({
      query: historyItem.query.replace(/\+/g, ' '),
      maxResults: 10
    });
  }

  formatQuery(query: string): string {
    return query.replace(/\+/g, ' ');
  }

  onImageError(event: any) {
    // Si la imagen falla, usar una imagen por defecto
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiB2aWV3Qm94PSIwIDAgMTIwIDkwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjkwIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNENzA3MDciIHN0cm9rZS13aWR0aD0iMiIvPgo8dGV4dCB4PSI2MCIgeT0iNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0Q3MDcwNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWluaWF0dXJhPC90ZXh0Pgo8L3N2Zz4K';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
} 