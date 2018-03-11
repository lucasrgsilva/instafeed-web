import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GalleryNewEventService {
  private url = "/api/events";

  constructor(private http: HttpClient) { }

  save(event: { title: string, hashtags: any[], userId: string }): Observable<any> {
    return this.http.post<any>(this.url, event);
  }

}
