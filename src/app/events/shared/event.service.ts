import { Injectable } from '@angular/core';
import { events } from '../../../misc/event-data';

@Injectable()
export class EventService {

  getEvents() {
    return events;
  }
}

