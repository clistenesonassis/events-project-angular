import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppEvents } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnail } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/events-details/events-details.component';
import { EventCreateComponent } from './events/events-create/events-create.component';
import { Navbar } from './nav/navbar.component';
import { AppRouterModule } from './app.routes.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  declarations: [
    AppEvents,
    EventsListComponent,
    EventThumbnail,
    EventDetailsComponent,
    EventCreateComponent,
    Navbar,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppEvents]
})
export class AppModule { }
