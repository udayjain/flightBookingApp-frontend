import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagesAirlineComponent } from './pages/manages-airline/manages-airline.component';
import { ManagesAirportComponent } from './pages/manages-airport/manages-airport.component';
import { ManagesScheduleComponent } from './pages/manages-schedule/manages-schedule.component';
import { MybookingComponent } from './pages/mybooking/mybooking.component';
import { TicketPreviewComponent } from './pages/ticket-preview/ticket-preview.component';
import { FindFlightComponent } from './pages/find-flight/find-flight.component';

import { FindTicketComponent } from './pages/find-ticket/find-ticket.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ManagesAirlineComponent,
    ManagesAirportComponent,
    ManagesScheduleComponent,
    MybookingComponent,
    TicketPreviewComponent,
    FindFlightComponent,
    FindTicketComponent,
    BoardUserComponent,
    BoardAdminComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
