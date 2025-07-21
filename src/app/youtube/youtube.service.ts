import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SearchHistory {
  id: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
  query: string;
  videoId: string;
  searchedAt: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  channelTitle: string;
  publishedAt: string;
  viewCount: string;
}

export interface Channel {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  subscriberCount: string;
  videoCount: string;
}

@Injectable({ providedIn: 'root' })
export class YouTubeService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  searchVideos(data: { query: string; maxResults: number }): Observable<any> {
    const params = { q: data.query, maxResults: data.maxResults };
    return this.http.get<any>(`${this.apiUrl}/search/videos`, { params });
  }

  /**
   * Llama al endpoint de test del backend.
   */
  testSearch(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/test`);
  }

  getSearchHistory(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/history/search`);
  }

  playVideo(videoId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/videos/${videoId}/play`);
  }

  getChannel(channelId: string): Observable<Channel> {
    return this.http.get<Channel>(`${this.apiUrl}/channels/${channelId}`);
  }
} 