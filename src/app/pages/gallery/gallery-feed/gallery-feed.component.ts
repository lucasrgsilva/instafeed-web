import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GalleryFeedService } from './gallery-feed.service';
import { InstagramAuthService } from '../shared/instagram-auth.service';

@Component({
  selector: 'app-gallery-feed',
  templateUrl: './gallery-feed.component.html',
  styleUrls: ['./gallery-feed.component.scss']
})
export class GalleryFeedComponent implements OnInit {
  images: Array<any> = [];
  hashtag: string;
  eventId: string;
  mustAuthenticate: Boolean;

  constructor(
    private galleryFeedService: GalleryFeedService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private instagramAuthService: InstagramAuthService
  ) { }

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEvent();
  }

  getInstagramCredentials(): void {
    this.instagramAuthService.getCredentials().subscribe(
      response => {
        const url = `${response.auth_params.instagram_url}
          ?client_id=${response.auth_params.client_id}
          &response_type=${response.auth_params.response_type}
          &scope=${response.auth_params.scope}
          &redirect_uri=${encodeURIComponent(
            window.location.origin +
            '/pages/gallery/instagram-callback?eventId=' +
            this.eventId
          )}`.replace(/\s+/g, '');
        window.location.href = url;
      }
    )
  }

  getEvent() {
    this.galleryFeedService.getEvent(this.eventId)
      .subscribe(response => {
        this.images = response.images
      }, error => {
        if (error.status === 403) {
          this.mustAuthenticate = true;
        } else {
          console.dir(error.status)
        }
      });
  }
}
