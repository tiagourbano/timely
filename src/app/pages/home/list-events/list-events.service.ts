import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { UtilsService } from './../../../utils/utils-service';
import { SearchEventParams } from './search-event-params.interface';
import { IEvents } from './events.interface';
import { EventParams } from './event-params.interface';

@Injectable({
  providedIn: 'root'
})
export class ListEventsService {
  private dateSource: BehaviorSubject<Date>;
  public currentDate: Observable<Date>;

  constructor(private httpClient: HttpClient) {
    this.dateSource = new BehaviorSubject(new Date());
    this.currentDate = this.dateSource.asObservable();
  }

  public getEvents(params: EventParams): Observable<IEvents> {
    const eventParams: SearchEventParams = {
      group_by_date: 1,
      start_date: params.date as string || new Date().toISOString().slice(0, 10),
      per_page: 30,
      page: params.page || 1
    };

    const queryParams: HttpParams = UtilsService.buildQueryParams(eventParams);

    return this.httpClient
      .get<IEvents>(
        `https://timelyapp.time.ly/api/calendars/${params.id}/events`,
        { params: queryParams }
      );
  }

  public changeDate(date: Date) {
    this.dateSource.next(date);
  }

}
