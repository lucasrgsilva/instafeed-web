import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GalleryEventsService } from './galley-events.service';

@Component({
  selector: 'app-gallery-events',
  templateUrl: './gallery-events.component.html',
  styleUrls: ['./gallery-events.component.scss']
})
export class GalleryEventsComponent implements OnInit {
  noEvents: Boolean = false;
  events: any[] = [];
  months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private galleryEventsService: GalleryEventsService, private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.galleryEventsService.getEvents()
      .subscribe(response => {
        if (response) {
          this.events = response.events.map(event => {
            event.day = new Date(event.date).getDate();
            event.month = this.months[new Date(event.date).getMonth()];
            return event;
          });
        } else {
          this.noEvents = true;
        }
        // console.log(this.events);
      });
  }
}
