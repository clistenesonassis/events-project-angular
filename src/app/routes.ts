import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventCreateRouteDeactivator } from './events/event-create/event-create-route-deactivator.service';

export const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: EventCreateComponent, canDeactivate: [EventCreateRouteDeactivator] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
];
