import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-copy-popup',
  templateUrl: './copy-popup.component.html',
  styleUrls: ['./copy-popup.component.scss'],
})
export class CopyPopupComponent implements OnInit {
  @ViewChild('popup') popup!: ElementRef<HTMLElement>;
  @Input()
  set event(event: Event) {
    console.log('event');

    this.onCopy();
  }

  copySub!: Subscription;

  constructor() {}

  ngOnInit(): void {
  }

  onCopy() {
    if (!this.popup) return;
    this.popup.nativeElement.classList.add('pop');
    setTimeout(() => {
      this.popup.nativeElement.classList.remove('pop');
    }, 3000);
  }
}
