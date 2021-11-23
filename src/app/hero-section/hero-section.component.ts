import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  @Output() eventCopy = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onCopy() {
    this.eventCopy.emit(event);
  }

}
