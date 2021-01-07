import { Component, OnInit,Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ticket } from  '../models/ticket';
import  {TicketService} from  '../service/ticket-service';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: Ticket;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private dataService: TicketService, private route: ActivatedRoute, private location: Location,private router: Router ) { }

  ngOnInit(): void {
    let ticketId = this.route.snapshot.params.id;
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      imagePath :['', Validators.required]
    });
    this.dataService.getTicket(+ticketId)
      .subscribe( data => {
        console.log(ticketId );
        this.editForm.setValue(
          {
           id: data.id,
           name: data.name,
           description: data.description,
           imagePath: data.imagePath


          }
        );
      });
 
  }
  

  updateTicket() {
    this.dataService.updateTicket(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          
           
            this.router.navigate(['/ticketslist']);
         
        },
        error => {
          alert(error);
        });
  }
  goBack(): void {
    this.location.back();
  }
}
