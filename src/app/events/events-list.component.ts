import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <h1>Upcoming Angular Events</h1>
    <hr />
    <event-thumbnail #thumbnail [event]="event"></event-thumbnail>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '09/02/2021',
    time: '10:45 am',
    price: '599,99',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    }
  }

  already(data: string) {
    console.log('Received: ', data);
  }
}
