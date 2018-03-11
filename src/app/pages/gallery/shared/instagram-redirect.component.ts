import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { InstagramAuthService } from './instagram-auth.service';

@Component({ template: ''})
export class InstagramRedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private instagramAuthService: InstagramAuthService
  ) { }

  ngOnInit() {
    const code = this.activatedRoute.snapshot.queryParams['code'];
    const eventId = this.activatedRoute.snapshot.queryParams['eventId'];

    if (!code)
      return this.router.navigate(['/pages/gallery/events']);

    this.instagramAuthService.auth(code, eventId).subscribe(
      () => this.router.navigate(['/pages/gallery/events', eventId])
    );
  }

}