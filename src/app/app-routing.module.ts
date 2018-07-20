import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './profile/profile.component';
import {CoverpageComponent} from './coverpage/coverpage.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/coverpage', pathMatch: 'full'},
  {path: 'coverpage', component: CoverpageComponent},
  {path: 'profilepage', component: ProfileComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
