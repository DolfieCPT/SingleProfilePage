import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AcademicsComponent } from './academics/academics.component';
import { MDBBootstrapModule } from '../../node_modules/angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { WavesModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkexperienceComponent } from './workexperience/workexperience.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    AcademicsComponent,
    WorkexperienceComponent
  ],
  imports: [
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
    // Material
    FlexLayoutModule,
    WavesModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
