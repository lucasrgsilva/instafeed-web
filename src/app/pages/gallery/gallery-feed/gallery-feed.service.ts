import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GalleryFeedService {
  private url = "/api/events";

  constructor(private http: HttpClient) { }

  getEvent(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

}
