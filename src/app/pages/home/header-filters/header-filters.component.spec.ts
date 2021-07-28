import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDatepickerInputEvent } from '@angular/material';
import { By } from '@angular/platform-browser';
import { ListEventsService } from '../list-events/list-events.service';

import { HeaderFiltersComponent } from './header-filters.component';

describe('HeaderFiltersComponent', () => {
  describe('Unit Test', () => {
    let component: HeaderFiltersComponent;
    let fixture: ComponentFixture<HeaderFiltersComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        declarations: [ HeaderFiltersComponent ],
        providers: [ ListEventsService ],
        schemas: [NO_ERRORS_SCHEMA],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderFiltersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('startDate should be initialized as an instance of date', () => {
      const startDate = component.startDate instanceof Date;
      expect(startDate).toBe(true);
    });

    describe('On calling selectedDate method', () => {
      it('should call listEventsService.changeDate', inject([ListEventsService], (listEventsService: ListEventsService) => {
        const listEventsServiceSpy = spyOn<any>(listEventsService, 'changeDate');
        const currentDate = new Date();

        component.selectedDate({value: currentDate} as MatDatepickerInputEvent<Date>);

        expect(listEventsServiceSpy).toHaveBeenCalledWith(currentDate);
      }));

      it('should not call listEventsService.changeDate', inject([ListEventsService], (listEventsService: ListEventsService) => {
        const listEventsServiceSpy = spyOn<any>(listEventsService, 'changeDate');
        const alertSpy = spyOn<any>(window, 'alert');

        component.selectedDate({value: null} as MatDatepickerInputEvent<Date>);

        expect(listEventsServiceSpy).not.toHaveBeenCalled();
        expect(alertSpy).toHaveBeenCalledWith('Invalid Date');
      }));
    });
  });

  describe('Component Test', () => {
    let component: HeaderFiltersComponent;
    let fixture: ComponentFixture<HeaderFiltersComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        declarations: [ HeaderFiltersComponent ],
        providers: [ ListEventsService ],
        schemas: [NO_ERRORS_SCHEMA],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(HeaderFiltersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should contain a datepicker with current date', () => {
      const datePickerComponent = fixture.debugElement.query(By.css('mat-form-field'));
      const datePickerRawValue = fixture.debugElement.query(By.css('input')).nativeElement.value;

      const datePickerValue = new Date(datePickerRawValue).toISOString().slice(0, 10);
      const currentDate = new Date().toISOString().slice(0, 10);

      expect(datePickerComponent).toBeTruthy();
      expect(datePickerValue).toEqual(currentDate);
    });
  });
});
