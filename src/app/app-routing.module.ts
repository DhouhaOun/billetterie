import { AppComponent } from './app.component';
import { NgModule } from '@angular/core'; 
import { TicketListComponent } from './home/shared/comps/ticket-list/ticket-list.component';
import { Routes, RouterModule } from '@angular/router';  
import { LoginComponent } from './login/login.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
const routes: Routes = [
    { path: 'ticketslist', component: TicketListComponent},
    { path: 'ticketsadd', component: TicketAddComponent},
    { path: 'ticketsedit/:id', component: TicketDetailComponent},
    { path: '', component:  LoginComponent},
  
  ];
  @NgModule({    
    imports: [RouterModule.forRoot(routes)],    
    exports: [RouterModule]    
  })    
  export class AppRoutingModule { }   