import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppEvents } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnail } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { Navbar } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppEvents,
    EventsListComponent,
    EventThumbnail,
    Navbar,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppEvents]
})
export class AppModule { }
