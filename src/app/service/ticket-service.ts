import { Injectable } from '@angular/core';
import { Ticket } from  '../models/ticket';
import {TicketData} from './ticket-data';
import {TicketFetch} from '../models/ticket-fetch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiurl = 'api/tickets';                 // Our created Data can be accessed here at api/users
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
 
  constructor(private http: HttpClient) { }  
  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }  
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getTicket(id: number): Observable<TicketFetch> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Ticket>(url).pipe(
    catchError(this.handleError)
    );
  }
  addTicket (ticket: TicketFetch): Observable<TicketFetch> {
   ticket.id=null;
    return this.http.post<TicketFetch>(this.apiurl, ticket, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
}
deleteTicket(id: number): Observable<TicketFetch> {
  const url = `${this.apiurl}/${id}`;
  return this.http.delete<TicketFetch>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}
updateTicket(ticket: TicketFetch): Observable<TicketFetch>{
  const url = `${this.apiurl}/${ticket.id}`;
  return this.http.put<TicketFetch>(this.apiurl,ticket,this.httpOptions).pipe(
    map(() => ticket),
    catchError(this.handleError)
  );
}
}