import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalRedirectComponent } from '@azure/msal-angular';
import { BodyComponent } from './Components/Body/body/body.component';
import { EventsComponent } from './Components/Events/events/events.component';

const routes: Routes = [

  { path: 'auth', component: MsalRedirectComponent },
  { path: './*', component: BodyComponent },
  { path: 'eventsComponent', component: EventsComponent },
  { path: 'eventsComponent/:id', component: EventsComponent },
  { path: 'bodyComponent', component: BodyComponent },
  { path: '',   redirectTo: '/bodyComponent', pathMatch: 'full' }, 
  { path: '**', component: BodyComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
