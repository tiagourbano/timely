import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UtilsService } from './../../../utils/utils-service';
import { SearchEventParams } from './search-event-params.interface';
import { IEvents } from './events.interface';

@Injectable({
  providedIn: 'root'
})
export class ListEventsService {

  constructor(private httpClient: HttpClient) {}

  public getEventsByCalendarId(calendarId: String): Observable<IEvents> {
    const eventParams: SearchEventParams = {
      group_by_date: 1,
      start_date: '2021-07-23',
      per_page: 30,
      page: 1
    };

    const queryParams: HttpParams = UtilsService.buildQueryParams(eventParams);

    return this.httpClient
      .get<IEvents>(
        `https://timelyapp.time.ly/api/calendars/${calendarId}/events`,
        { params: queryParams }
      );
  }
}
