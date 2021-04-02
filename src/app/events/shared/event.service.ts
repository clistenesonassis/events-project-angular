import { Injectable } from '@angular/core';
import { events } from '../../../misc/event-data';

@Injectable()
export class EventService {

  getEvents() {
    return events;
  }

  getEvent(id: number) {
    return events.find(e => e.id === id);
  }
}

