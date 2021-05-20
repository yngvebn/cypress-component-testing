import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  template: `<button (click)="changeText()">{{ text }}</button>`,
  styles: [],
})
export class MyButtonComponent {
  @Input() public text: string = '';
    constructor() { }

    changeText() {
        this.text = 'Changed!';
    }
}
