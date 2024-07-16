import { TicketStatus } from '../components/tickets/tickets.enum';

export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: TicketStatus;
}
