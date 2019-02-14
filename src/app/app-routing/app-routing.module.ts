// import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AppreciateComponent } from '../appreciate/appreciate.component';
import { StarterAppreciateComponent } from '../starter/starter-appreciate/starter-appreciate.component';
import { ProfileComponent } from '../profile/profile.component';
// import { SampleComponent } from '../sample/sample.component';
import { BadgesComponent } from '../badges/badges.component';
import { NominateSomeoneComponent } from '../nominate-someone/nominate-someone.component';
import { HelpComponent } from '../help/help.component';
import { ListsComponent } from '../lists/lists.component';
import { HomeComponent } from '../home/home.component';
import { StarterContentComponent } from '../starter/starter-content/starter-content.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'starter',
        component: StarterComponent,
        children : [
          { path: '', redirectTo: 'timeline', pathMatch: 'full' },
          {
            path: 'timeline',
            component: StarterContentComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          { 
            path: 'starter-appreciate',
            component: StarterAppreciateComponent 
          },
          { 
            path: 'profile',
            component: ProfileComponent 
          },
          { 
            path: 'badges',
            component: BadgesComponent
          },
          { 
            path: 'help',
            component: HelpComponent
          },
          { 
            path: 'nominate-someone',
            component: NominateSomeoneComponent
          },
          { 
            path: 'lists',
            component: ListsComponent
          },
        ]
      },
      
      { 
        path: 'home',
        component: HomeComponent
      },
    ], {useHash: true})
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
