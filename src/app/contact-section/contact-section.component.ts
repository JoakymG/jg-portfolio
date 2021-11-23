import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @Output() eventCopy = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onCopy() {
    this.eventCopy.emit(event);
  }
}
