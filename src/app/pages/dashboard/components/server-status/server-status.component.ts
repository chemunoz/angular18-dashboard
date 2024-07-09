import { Component } from '@angular/core';
import { ServerStatus } from './status.enum';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: ServerStatus = ServerStatus.OFFLINE;

  constructor() {
    this.updateServerStatus();
  }

  private updateServerStatus(): void {
    setInterval(() => {
      this.currentStatus = this.getRandomServerStatus();
    }, 3000);
  }

  private getRandomServerStatus(): ServerStatus {
    const rnd = Math.random();
    if (rnd < 0.5) {
      return ServerStatus.ONLINE;
    } else if (rnd < 0.9) {
      return ServerStatus.OFFLINE;
    } else {
      return ServerStatus.UNKNOWN;
    }
  }
}
