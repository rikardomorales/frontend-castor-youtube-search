import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-castor-youtube-search_';
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
