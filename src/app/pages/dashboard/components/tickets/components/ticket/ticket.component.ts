import { Component, input, signal } from '@angular/core';
import { Ticket } from '@app/pages/dashboard/interfaces/ticket.interface';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails(): void {
    this.detailsVisible.set(!this.detailsVisible());
  }
}
