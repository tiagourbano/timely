import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  describe('Unit Test', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    }));

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });

  describe('Component test', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          MatToolbarModule,
        ],
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
    });

    it('should render mat-toolbar', () => {
      const element = fixture.debugElement.query(By.css('#app-toolbar')).nativeElement;
      expect(element).toBeTruthy();
    });
  });
});
