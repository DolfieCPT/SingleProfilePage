import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { AboutmeComponent } from './profile/aboutme/aboutme.component';
import { AcademicsComponent } from './profile/academics/academics.component';
import { MDBBootstrapModule } from '../../node_modules/angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { WavesModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkexperienceComponent } from './profile/workexperience/workexperience.component';
import { ProfileComponent } from './profile/profile.component';
import { CoverpageComponent } from './coverpage/coverpage.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { RequestservicesComponent } from './profile/requestservices/requestservices.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    AcademicsComponent,
    WorkexperienceComponent,
    ProfileComponent,
    CoverpageComponent,
    RequestservicesComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'your key here'
    }),
    BrowserModule, BrowserAnimationsModule, NoopAnimationsModule,  MDBBootstrapModule.forRoot(), WavesModule,
    MatAutocompleteModule, MatButtonToggleModule, MatCardModule, FlexLayoutModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatSortModule
  ],
  exports: [
    RouterModule,
    // Material
    FlexLayoutModule, WavesModule, MatAutocompleteModule, MatButtonToggleModule,
    MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatProgressSpinnerModule,
    MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSliderModule,
    MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatNativeDateModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
