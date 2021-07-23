import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from './home.component';
import { ListEventsComponent } from './list-events/list-events.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListEventsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ]
})
export class HomeModule { }
