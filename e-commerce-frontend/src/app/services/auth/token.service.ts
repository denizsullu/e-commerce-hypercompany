import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public getUserDetailsFromToken(): any | null {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    try {
      const payload = this.decodeTokenPayload(token);
      return JSON.parse(payload);
    } catch (error) {
      console.error('Token parse error:', error);
      return null;
    }
  }

  private decodeTokenPayload(token: string): string {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return atob(base64);
  }
}

