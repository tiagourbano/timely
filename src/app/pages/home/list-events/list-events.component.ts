import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ListEventsService } from './list-events.service';
import { IItemEvent } from './item-event.interface';
import { IEvents } from './events.interface';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit, OnDestroy {

  constructor(private listEventsService: ListEventsService) {
    this.listEvents = {};
    this.listEventsHeaderDate = [];
  }

  public listEvents: IItemEvent;
  public listEventsHeaderDate: string[];

  private dateSubscription: Subscription;

  public ngOnInit(): void {
    this.initSubscriptions();
  }

  public ngOnDestroy(): void {
    this.dateSubscription.unsubscribe();
  }

  private getEventList(date: string): void {
    this.listEventsService
      .getEvents({ id: '54705442', date  })
      .subscribe((response: IEvents) => {
        this.listEvents = response.data.items;

        if (this.listEvents) {
          this.listEventsHeaderDate = Object.keys(this.listEvents);
        }
      });
  }

  private initSubscriptions(): void {
    this.dateSubscription = this.listEventsService.currentDate.subscribe((date: Date) => {
      this.getEventList(new Date(date).toISOString().slice(0, 10));
    });
  }
}
