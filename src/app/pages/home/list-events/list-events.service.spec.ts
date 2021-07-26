import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ListEventsService } from './list-events.service';
import { UtilsService } from './../../../utils/utils-service';
import { IEvents } from './events.interface';
import { EventParams } from './event-params.interface';

describe('ListEventsService', () => {
  let listEventsService: ListEventsService;
  let httpTestingController: HttpTestingController;

  describe('Unit tests', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          ListEventsService,
          UtilsService
        ]
      });

    });

    beforeEach(() => {
      listEventsService = TestBed.get(ListEventsService);
      httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
      expect(listEventsService).toBeTruthy();
    });

    it('should call UtilsService', inject([UtilsService], () => {
      const utilService = spyOn<any>(UtilsService, 'buildQueryParams');

      listEventsService.getEvents({id: '1', date: '2021-07-25'} as EventParams);

      expect(utilService).toHaveBeenCalled();
    }));

    describe('On calling the getEvents method', () => {
      let baseUrl: string;
      let requestUrl: string;
      const calendarId: string = '54705442';
      const currentDate: string = new Date().toISOString().slice(0, 10);
      let dataEvents: IEvents;

      beforeEach(() => {
        baseUrl = `https://timelyapp.time.ly/api/calendars`;
        requestUrl = `${baseUrl}/${calendarId}/events?group_by_date=1&start_date=${currentDate}&per_page=30&page=1`;
        dataEvents = {
          data: {
            total: 2408,
            from: 0,
            size: 30,
            has_prior: false,
            has_next: true,
            items: {
              "2020-08-13": [{
                cost_display: "0",
                images: [{
                  id: null,
                  title: "-",
                  sizes: {
                  full: {
                    url: "https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png",
                    width: null,
                    height: null
                    },
                  medium: {
                    url: "https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png",
                    width: null,
                    height: null
                    },
                  small: {
                    url: "https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png",
                    width: null,
                    height: null
                    },
                  thumbnail: {
                    url: "https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png",
                    width: null,
                    height: null
                    }
                  }
                }],
              instance: "20200813000000",
              cost_external_url: null,
              calendar_id: 54705442,
              start_datetime: "2020-08-13 00:00:00",
              end_datetime: "2021-08-13 23:59:59",
              cost_type: null,
              timezone: "UTC",
              post_to_twitter: false,
              post_to_facebook: false,
              title: "Book Talk with Author Meryl Ain",
              is_example_event: false,
              feed_id: 54720031,
              uid: "ai1ec-18666@goldcoastarts.org",
              allday: true,
              description_short: "\ufeff\n\nSYNOPSIS\n\nWith the cloud of the Holocaust still looming over them, twin sisters Brooks and Johanna Lubinski and their parents arrive in the US from a Displaced Persons Camp. In the years after WWII&hellip;",
              taxonomies: {
                  taxonomy_venue: [{
                    country: null,
                    image: null,
                    website: null,
                    address: null,
                    geo_location: null,
                    reference_id: 54705442,
                    address2: null,
                    city: null,
                    timezone: null,
                    item_type: "taxonomy_venue",
                    phone2: null,
                    created_at: "2021-06-14 15:18:12",
                    title: "Online Special Event",
                    deleted_at: null,
                    country_first_division: null,
                    updated_at: "2021-06-14 15:18:12",
                    phone: null,
                    venue_type: "O",
                    id: 678095972,
                    image_id: null,
                    postal_code: null,
                    email: null,
                    place_id: null
                  }]
                },
                id: 66930351,
                user: null,
                event_status: "confirmed",
                custom_url: "meryl-ain",
                url: "https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351\/20200813000000",
                canonical_url: "https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351"
              }]
            }
          }
        };
      });

      it('should make a http request with the correct url and parameters', fakeAsync(() => {
        let httpTestRequest: TestRequest;

        listEventsService.getEvents({ id: '54705442', date: currentDate } as EventParams).toPromise();

        httpTestRequest = httpTestingController.expectOne(requestUrl);
        expect(httpTestRequest.request.method).toEqual('GET');
        expect(httpTestRequest.request.urlWithParams).toEqual(requestUrl);

        httpTestRequest.flush({});
        tick();
      }));

      it('should make a http request with current date if the user do not pass date', fakeAsync(() => {
        let httpTestRequest: TestRequest;

        listEventsService.getEvents({ id: '54705442' } as EventParams).toPromise();

        httpTestRequest = httpTestingController.expectOne(requestUrl);
        expect(httpTestRequest.request.method).toEqual('GET');
        expect(httpTestRequest.request.urlWithParams).toEqual(requestUrl);

        httpTestRequest.flush({});
        tick();
      }));

      it('should make a http request and return the events data', (done: Function) => {
        const spyListEventsService = spyOn<any>(listEventsService, 'getEvents').and
          .callFake(() => of(dataEvents));

        listEventsService
          .getEvents({ id: '54705442', date: currentDate } as EventParams)
          .subscribe((response: IEvents) => {
            expect(Object.keys(response.data.items).length).toEqual(1);
            expect(spyListEventsService).toHaveBeenCalled();

            done();
          });
      });
    });

    describe('On calling changeDate method', () => {
      it('should call dateSource BehaviorSubject', () => {
        const currentDate = new Date();
        const dateSourceSpy = spyOn<any>(listEventsService['dateSource'], 'next');

        listEventsService.changeDate(currentDate);

        expect(dateSourceSpy).toHaveBeenCalledWith(currentDate);
      });
    });
  });
});
