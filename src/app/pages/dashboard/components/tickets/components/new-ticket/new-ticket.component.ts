import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/button/button.component';
import { ControlComponent } from '@shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // NOTE: 'viewChild' function is only available in Angular 17.3+ before that, use 'ViewChild' decorator
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, text: string): void {
    console.log('submit', { title, text });
    this.form()?.nativeElement.reset();
  }
}
