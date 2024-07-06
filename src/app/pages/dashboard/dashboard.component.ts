import { Component } from '@angular/core';
import { ImageItem } from './interfaces/image-item.interface';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { TicketsComponent } from './components/tickets/tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  statusImage: ImageItem = {
    src: 'status.png',
    alt: 'A signal symbol',
  };

  trafficImage: ImageItem = {
    src: 'globe.png',
    alt: 'A globe',
  };

  ticketImage: ImageItem = {
    src: 'list.png',
    alt: 'A list of items',
  };
}
