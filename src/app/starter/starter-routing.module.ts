// import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { ProfileComponent } from './../profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarterAppreciateComponent } from './starter-appreciate/starter-appreciate.component';
import { BadgesComponent } from '../badges/badges.component';
import { HelpComponent } from '../help/help.component';
import { NominateSomeoneComponent } from '../nominate-someone/nominate-someone.component';
import { ListsComponent } from '../lists/lists.component';
import { StarterComponent } from './starter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class StarterRoutingModule { }
