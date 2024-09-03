import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; // Your backend API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }
  isLoggedIn(): boolean {
    // Logique pour vérifier si l'utilisateur est connecté
    return !!localStorage.getItem('token'); // Vérifie si un token est stocké dans le localStorage
  }
}
