import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { BodyComponent } from './Components/Body/body/body.component';
import { EventsmodalComponent } from './Modals/EventsModal/eventsmodal/eventsmodal.component';
import { TicketsmodalComponent } from './Modals/TicketsModal/ticketsmodal/ticketsmodal.component';
import { EventsComponent } from './Components/Events/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MsalModule, MsalService, MSAL_INSTANCE, MsalRedirectComponent, MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalGuard, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PricingComponent } from './Components/Pricing/pricing/pricing.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'c0aea600-7edf-4392-9b9d-db0962859a18', 
      authority: 'https://login.microsoftonline.com/27d76b99-0ce0-463e-b4b5-d9cc9e9910a8', 
      redirectUri: '/auth',
      postLogoutRedirectUri: '/bodyComponent'
    }
  })
}

export function MsalGuardConfigFactory(): MsalGuardConfiguration { 
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ["user.read"]
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EventsmodalComponent,
    TicketsmodalComponent,
    EventsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ZXingScannerModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MsalGuardConfigFactory
    },
    MsalService,
    MsalBroadcastService,
    MsalGuard
  ],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
