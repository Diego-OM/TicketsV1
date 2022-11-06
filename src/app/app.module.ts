import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { BodyComponent } from './Components/Body/body/body.component';
import { EventsmodalComponent } from './Modals/EventsModal/eventsmodal/eventsmodal.component';
import { TicketsmodalComponent } from './Modals/TicketsModal/ticketsmodal/ticketsmodal.component';
import { EventsComponent } from './Components/Events/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EventsmodalComponent,
    TicketsmodalComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
