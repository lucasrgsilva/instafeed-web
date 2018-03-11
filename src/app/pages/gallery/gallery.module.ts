import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { GalleryRoutingModule, routedComponents } from './gallery-routing.module';
import { GalleryFeedService } from './gallery-feed/gallery-feed.service';
import { GalleryEventsService } from './gallery-events/galley-events.service';
import { InstagramAuthService } from './shared/instagram-auth.service';
import { GalleryNewEventService } from './gallery-new-event/gallery-new-event.service';

@NgModule({
  imports: [
    ThemeModule,
    GalleryRoutingModule,
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    GalleryFeedService, 
    GalleryEventsService, 
    InstagramAuthService,
    GalleryNewEventService
  ],
})
export class GalleryModule { }
