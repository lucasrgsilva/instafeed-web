import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryNewEventService } from './gallery-new-event.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

import { GetPayload } from '../shared/urlBase64Decode';

@Component({
  selector: 'app-gallery-new-event',
  templateUrl: './gallery-new-event.component.html',
  styleUrls: ['./gallery-new-event.component.scss']
})
export class GalleryNewEventComponent implements OnInit {
  hashtags: any[] = [];
  user: any;

  constructor(
    private galleryNewEventService: GalleryNewEventService,
    private router: Router,
    private authService: NbAuthService,
  ) { }

  ngOnInit() {
    this.authService.getToken()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.getValue()) {
          this.user = new GetPayload(token.getValue());
          console.log(this.user);
        }
      });
  }

  onAdd(hashtag: string): void {
    hashtag.split('#').map(tag => {
      if (tag.trim()) this.hashtags.push(tag.trim())
    });
  }

  onRemove(index: number): void {
    this.hashtags.splice(index, 1);
  }

  onStart(title: string): void {
    if (!title.trim() || this.hashtags.length == 0) {
      return
    }
    const event = {
      title: title,
      hashtags: this.hashtags,
      userId: this.user._id
    }
    this.galleryNewEventService.save(event).subscribe(
      response => this.router.navigate(['/pages/gallery/events', response.event._id])
    );
  }
}
