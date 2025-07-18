import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  private apiUrl = 'http://localhost:8080/api/youtube';

  constructor(private http: HttpClient) {}

  searchVideos(data: { query: string; maxResults: number }): Observable<any> {
    const params = { q: data.query, maxResults: data.maxResults };
    return this.http.get<any>(`${this.apiUrl}/search`, { params });
  }
} 