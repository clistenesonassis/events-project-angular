import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppEvents } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnail } from './events/event-thumbnail.component';
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
  providers: [],
  bootstrap: [AppEvents]
})
export class AppModule { }
