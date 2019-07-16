import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SubmitComponent } from './submit/submit.component';
import { DashComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ActionlistComponent } from './actionlist/actionlist.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { JobSearchComponent } from './job-search/job-search.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotificationsComponent,
    SubmitComponent,
    DashComponent,
    ActionlistComponent,
    CreateCandidateComponent,
    JobSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
