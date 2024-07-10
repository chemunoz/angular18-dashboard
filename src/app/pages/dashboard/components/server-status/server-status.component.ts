import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ServerStatus } from './status.enum';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: ServerStatus = ServerStatus.OFFLINE;
  // NOTE: We can use 'DestroyRef' from Angular 16 or newer
  #destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.updateServerStatus();
  }

  private updateServerStatus(): void {
    const interval = setInterval(() => {
      this.currentStatus = this.getRandomServerStatus();
    }, 3000);

    this.#destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
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
