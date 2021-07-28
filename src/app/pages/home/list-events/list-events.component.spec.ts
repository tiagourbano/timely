import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material';

import { ListEventsComponent } from './list-events.component';
import { SafeHtmlPipe } from './../../../pipes/safe-html.pipe';
import { ListEventsService } from './list-events.service';
import { IEvents } from './events.interface';

let dataEvents: IEvents = {
  data: {
    from: null,
    has_next: null,
    has_prior: null,
    size: null,
    total: null,
  }
};

describe('ListEventsComponent', () => {
  describe('Unit tests', () => {
    let component: ListEventsComponent;
    let fixture: ComponentFixture<ListEventsComponent>;
    let listEventsService: ListEventsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [
          ListEventsComponent,
          SafeHtmlPipe
        ],
        providers: [ListEventsService],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ListEventsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    beforeEach(() => {
      listEventsService = TestBed.get(ListEventsService);

      dataEvents = {
        data: {
          total: 2408,
          from: 0,
          size: 30,
          has_prior: false,
          has_next: true,
          items: {
            '2020-08-13': [{
              cost_display: '0',
              images: [{
                id: null,
                title: '-',
                sizes: {
                full: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                medium: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                small: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                thumbnail: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  }
                }
              }],
            instance: '20200813000000',
            cost_external_url: null,
            calendar_id: 54705442,
            start_datetime: '2020-08-13 00:00:00',
            end_datetime: '2021-08-13 23:59:59',
            cost_type: null,
            timezone: 'UTC',
            post_to_twitter: false,
            post_to_facebook: false,
            title: 'Book Talk with Author Meryl Ain',
            is_example_event: false,
            feed_id: 54720031,
            uid: 'ai1ec-18666@goldcoastarts.org',
            allday: true,
            description_short: '\ufeff\n\nSYNOPSIS\n\nWith the cloud the over them WWII&hellip;',
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
                  item_type: 'taxonomy_venue',
                  phone2: null,
                  created_at: '2021-06-14 15:18:12',
                  title: 'Online Special Event',
                  deleted_at: null,
                  country_first_division: null,
                  updated_at: '2021-06-14 15:18:12',
                  phone: null,
                  venue_type: 'O',
                  id: 678095972,
                  image_id: null,
                  postal_code: null,
                  email: null,
                  place_id: null
                }]
              },
              id: 66930351,
              user: null,
              event_status: 'confirmed',
              custom_url: 'meryl-ain',
              url: 'https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351\/20200813000000',
              canonical_url: 'https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351'
            }]
          }
        }
      };
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call initSubscriptions', () => {
      const spyInitSubscriptions = spyOn<any>(component, 'initSubscriptions');

      component.ngOnInit();

      expect(spyInitSubscriptions).toHaveBeenCalled();
    });

    it('should not empty listEvents', () => {
      spyOn<any>(listEventsService, 'getEvents').and.returnValue(of(dataEvents));

      listEventsService['dateSource'].next(new Date());

      expect(component.listEvents).not.toEqual({});
    });

    it('should not be empty listEvents if the user do not pass a date', () => {
      spyOn<any>(listEventsService, 'getEvents').and.returnValue(of(dataEvents));

      listEventsService['dateSource'].next(null);

      expect(component.listEvents).not.toEqual({});
    });
  });

  describe('Component Test', () => {
    let fixture: ComponentFixture<ListEventsComponent>;
    let listEventsService: ListEventsService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          MatCardModule,
        ],
        declarations: [
          ListEventsComponent,
          SafeHtmlPipe
        ],
        providers: [ListEventsService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ListEventsComponent);
      fixture.detectChanges();
    });

    beforeEach(() => {
      listEventsService = TestBed.get(ListEventsService);

      dataEvents = {
        data: {
          total: 2408,
          from: 0,
          size: 30,
          has_prior: false,
          has_next: true,
          items: {
            '2020-08-13': [{
              cost_display: '0',
              images: [{
                id: null,
                title: '-',
                sizes: {
                full: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                medium: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                small: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  },
                thumbnail: {
                  url: 'https:\/\/goldcoastarts.org\/wp-content\/uploads\/2020\/07\/Meryl-Ain.png',
                  width: null,
                  height: null
                  }
                }
              }],
            instance: '20200813000000',
            cost_external_url: null,
            calendar_id: 54705442,
            start_datetime: '2020-08-13 00:00:00',
            end_datetime: '2021-08-13 23:59:59',
            cost_type: null,
            timezone: 'UTC',
            post_to_twitter: false,
            post_to_facebook: false,
            title: 'Book Talk with Author Meryl Ain',
            is_example_event: false,
            feed_id: 54720031,
            uid: 'ai1ec-18666@goldcoastarts.org',
            allday: true,
            description_short: '\ufeff\n\nSYNOPSIS\n\nWith the cloud the over them WWII&hellip;',
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
                  item_type: 'taxonomy_venue',
                  phone2: null,
                  created_at: '2021-06-14 15:18:12',
                  title: 'Online Special Event',
                  deleted_at: null,
                  country_first_division: null,
                  updated_at: '2021-06-14 15:18:12',
                  phone: null,
                  venue_type: 'O',
                  id: 678095972,
                  image_id: null,
                  postal_code: null,
                  email: null,
                  place_id: null
                }]
              },
              id: 66930351,
              user: null,
              event_status: 'confirmed',
              custom_url: 'meryl-ain',
              url: 'https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351\/20200813000000',
              canonical_url: 'https:\/\/calendar.time.ly\/6a37fb6n\/event\/66930351'
            }]
          }
        }
      };
    });

    describe('On component initialization and creation', () => {
      it('should render .wrapper-list-events', () => {
        const wrapperListEvent = fixture.debugElement.query(By.css('.wrapper-list-events')).nativeElement;

        expect(wrapperListEvent).toBeTruthy();
      });

      it('should render 1 event card', async () => {
        spyOn<any>(listEventsService, 'getEvents').and.returnValue(of(dataEvents));
        listEventsService['dateSource'].next(new Date());

        fixture.detectChanges();
        await fixture.whenStable().then(() => {
          const matCards = fixture.debugElement.queryAll(By.css('mat-card'));
          expect(matCards.length).toBe(1);
        });
      });
    });
  });
});
