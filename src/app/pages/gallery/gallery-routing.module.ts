import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { GalleryFeedComponent } from './gallery-feed/gallery-feed.component';
import { GalleryEventsComponent } from './gallery-events/gallery-events.component';
import { GalleryNewEventComponent } from './gallery-new-event/gallery-new-event.component';
import { InstagramRedirectComponent } from './shared/instagram-redirect.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
    children: [
      {
        path: 'events',
        children: [
          { path: '', component: GalleryEventsComponent },
          { path: ':id', component: GalleryFeedComponent }
        ]
      },
      {
        path: 'new-event',
        component: GalleryNewEventComponent,
      },
      {
        path: 'instagram-callback',
        component: InstagramRedirectComponent,
      }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class GalleryRoutingModule { }

export const routedComponents = [
  GalleryComponent,
  GalleryFeedComponent,
  GalleryEventsComponent,
  GalleryNewEventComponent,
  InstagramRedirectComponent
];
