import { Component, input } from '@angular/core';
import { ImageItem } from '../../interfaces/image-item.interface';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  image = input.required<ImageItem>();
  title = input<string>();
}
