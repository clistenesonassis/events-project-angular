import { CanDeactivate, ActivatedRouteSnapshot  } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventCreateComponent } from './event-create.component';

@Injectable()
export class EventCreateRouteDeactivator implements CanDeactivate<EventCreateComponent> {

  constructor(){}

  canDeactivate(component: EventCreateComponent, route: ActivatedRouteSnapshot) {
    if (component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?');

      return true;
  }
}
