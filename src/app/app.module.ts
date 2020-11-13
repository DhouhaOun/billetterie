import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BilletComponantComponent } from './home/shared/comps/billet-componant/billet-componant.component';
import { TicketComponent } from './home/shared/comps/ticket/ticket.component';
import { TicketListComponent } from './home/shared/comps/ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BilletComponantComponent,
    TicketComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
