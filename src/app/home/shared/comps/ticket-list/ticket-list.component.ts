import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from  '../../../../models/ticket';
import  {TicketService} from  '../../../../service/ticket-service';
import { TicketFetch } from  '../../../../models/ticket-fetch';
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers: [TicketService]
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[] =[];
  displayData :boolean;
 ticket : TicketFetch;

  constructor(private dataService: TicketService, private router: Router) { }

 
  getTickets(){
    this.dataService.getTickets().subscribe(data => {
      this.tickets = data;
      this.displayData=true;
    });
  }

  onSelect(tick: Ticket): void {
    this.router.navigate(['/ticketsedit', tick.id]);
  }
  deleteticket(tick: Ticket) {

    this.dataService.deleteTicket(tick.id).subscribe(data => {
      this.getTickets();
    });
  }

  ngOnInit(): void {
    this.getTickets();
  
  }

}
