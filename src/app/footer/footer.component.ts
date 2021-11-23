import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() eventCopy = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onCopy() {
    console.log('click');
    this.eventCopy.emit(event);
  }
}
