import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { SafeHtmlPipe } from './../../pipes/safe-html.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ListEventsComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
