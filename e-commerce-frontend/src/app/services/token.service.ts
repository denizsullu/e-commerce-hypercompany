import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  public getUserDetailsFromToken(): any {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    const payload = token.split('.')[1];
    if (!payload) {
      return null;
    }

    const decodedPayload = atob(payload);
    try {
      return JSON.parse(decodedPayload);
    } catch (e) {
      console.error('Token parse error:', e);
      return null;
    }
  }
}
