import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard, MsalRedirectComponent } from '@azure/msal-angular';
import { BodyComponent } from './Components/Body/body/body.component';
import { EventsComponent } from './Components/Events/events/events.component';
import { PricingComponent } from './Components/Pricing/pricing/pricing.component';

const routes: Routes = [

  { path: 'auth', component: MsalRedirectComponent},
  { path: './*', component: BodyComponent },
  { path: 'eventsComponent', component: EventsComponent },
  { path: 'pricingComponent', component: PricingComponent },
  { path: 'eventsComponent/:id', component: EventsComponent },
  { path: 'bodyComponent', component: BodyComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' }, 
  { path: '**', component: BodyComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
