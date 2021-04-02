import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/events-details/events-details.component';
import { EventCreateComponent } from './events/events-create/events-create.component';

export const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
];
