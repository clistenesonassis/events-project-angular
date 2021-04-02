import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppEvents } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnail } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventCreateRouteDeactivator } from './events/event-create/event-create-route-deactivator.service';
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
    Error404Component,
  ],
  providers: [EventService, ToastrService, EventRouteActivator, EventCreateRouteDeactivator],
  bootstrap: [AppEvents]
})
export class AppModule { }
