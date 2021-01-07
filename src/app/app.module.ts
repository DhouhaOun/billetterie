import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';    
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {TicketData } from '../app/service/ticket-data';
import { TicketListComponent } from './home/shared/comps/ticket-list/ticket-list.component';
import { LoginComponent } from './login/login.component';
import { TicketService } from './service/ticket-service';
import { AuthenticationService } from './service/authentication.service';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import {TicketNamePipe} from './pipes/ticketName.pipe';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    LoginComponent,
    TicketDetailComponent,
    TicketNamePipe,
    TicketAddComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule ,
    AppRoutingModule, 
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TicketData)
  ],


  providers: [TicketService,AuthenticationService ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
