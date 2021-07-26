import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ListEventsService } from './list-events.service';
import { IItemEvent } from './item-event.interface';


@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit, OnDestroy {

  private dateSubscription: Subscription;

  public listEvents: IItemEvent;
  public listEventsHeaderDate: string[];

  constructor(private listEventsService: ListEventsService) {
    this.listEvents = {};
    this.listEventsHeaderDate = [];
  }

  private getEventList(date: string): void {
    this.listEventsService
      .getEvents({ id: '54705442', date  })
      .subscribe((response) => {
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

  public ngOnInit(): void {
    this.initSubscriptions();
  }

  public ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }
}
