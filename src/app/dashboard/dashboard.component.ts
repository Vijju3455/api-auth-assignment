import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  // ✅ DO NOT include standalone: true
})
export class DashboardComponent implements OnInit {
  posts: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.error = '';
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: data => { // simulate delay of 1.5 seconds
        setTimeout(() => {
          this.posts = data;
          this.loading = false;
        }, 1500);
      },
      error: () => {
        setTimeout(() => {
          this.error = 'Failed to fetch data';
          this.loading = false;
        }, 1500);
      }
    });
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
