import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {TripSummaryChangeModalComponent} from '../app/shared/tripSummary/trip-summary-modal.component'
import { AppComponent } from './app.component';
import {ModalComponentDirective} from './main';
import {MainComp} from './main'
@NgModule({
  declarations: [
    AppComponent,
    TripSummaryChangeModalComponent,
    ModalComponentDirective,
    MainComp
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  entryComponents: [
    TripSummaryChangeModalComponent
  ]
})
export class AppModule { }
