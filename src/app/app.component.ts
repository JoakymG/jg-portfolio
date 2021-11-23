import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jg-portfolio';
  public copyEvent!: Event;


  eventCopy(event: Event) {
    this.copyEvent = event;
  }
}
