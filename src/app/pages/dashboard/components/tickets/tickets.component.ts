import { Component } from '@angular/core';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { Ticket } from '@app/pages/dashboard/interfaces/ticket.interface';
import { NewTicket } from '@app/pages/dashboard/interfaces/new-ticket.interface';
import { TicketStatus } from './tickets.enum';
import { TicketComponent } from './components/ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticket: NewTicket): void {
    this.tickets.push({
      ...ticket,
      id: Math.random().toString(),
      status: TicketStatus.OPEN,
    });
  }
}
