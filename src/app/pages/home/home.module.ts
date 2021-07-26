import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { SafeHtmlPipe } from './../../pipes/safe-html.pipe';
import { HeaderFiltersComponent } from './header-filters/header-filters.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListEventsComponent,
    SafeHtmlPipe,
    HeaderFiltersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class HomeModule { }
