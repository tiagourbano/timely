import { Component, OnInit } from '@angular/core';

import { ListEventsService } from './list-events.service';
import { IItemEvent } from './item-event.interface';


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  public listEvents: IItemEvent[];
  public listEventsHeaderDate: string[] = [];

  constructor(private listEventsService: ListEventsService) {}

  ngOnInit() {
    this.listEventsService
      .getEventsByCalendarId('54705442')
      .subscribe((response) => {
        this.listEvents = response.data.items;
        this.listEventsHeaderDate = Object.keys(this.listEvents);
      });
  }

}
