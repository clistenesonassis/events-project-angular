import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'events-list',
  template: `
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-md-6" *ngFor="let event of events">
          <event-thumbnail #thumbnail [event]="event" (click)="handlerThumbnailClick(event.name)"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
  styles:[]
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private toastr: ToastrService){}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handlerThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }

  already(data: string) {
    console.log('Received: ', data);
  }
}
