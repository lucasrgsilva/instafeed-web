import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InstagramAuthService {
  private url = "/api/instagram";
  
  public get instagram_redirect_url(): string {
    return this.url; 
  }

  constructor(private http: HttpClient) { }

  auth(code: string, eventId: string): Observable<any> {
    let params = new HttpParams()
      .set('code', code)
      .set('eventId', eventId)
      .set('redirect_uri', window.location.origin + window.location.pathname);
    return this.http.get<any>(`${this.url}/auth`, { params: params });
  }

  getCredentials(): Observable<any> {
    return this.http.get<any>(`${this.url}/credentials`);
  }
}