import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Ticket} from '../models/ticket';
import { TicketService } from '../service/ticket-service';
import { TicketFetch } from '../models/ticket-fetch';


@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  ticketFormGroup: FormGroup;
  tickets: Ticket[];
  ticket: TicketFetch;

  constructor(private dataservice: TicketService){}
  getTickets(){
    this.dataservice.getTickets().subscribe(data => {
      this.tickets = data;
    });
  }
  ngOnInit() {
    this.ticketFormGroup = new FormGroup(
      {
        name : new FormControl(''),
        description : new FormControl('')
      },
    );
    this.getTickets();
}


addTicket() {
  this.dataservice.addTicket(this.ticketFormGroup.value).subscribe(data => {
    this.ticket = data;
    console.log(this.tickets);
  });
  this.getTickets();
}
}
