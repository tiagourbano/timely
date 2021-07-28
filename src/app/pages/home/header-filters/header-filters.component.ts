import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';
import { ListEventsService } from '../list-events/list-events.service';

@Component({
  selector: 'app-header-filters',
  templateUrl: './header-filters.component.html',
  styleUrls: ['./header-filters.component.scss']
})
export class HeaderFiltersComponent {
  public startDate: Date = new Date();

  public constructor(private listEventsService: ListEventsService) {}

  public selectedDate(event: MatDatepickerInputEvent<Date>): void {
    if (event.value instanceof Date) {
      this.listEventsService.changeDate(event.value);

      return;
    }

    alert('Invalid Date');
  }
}
