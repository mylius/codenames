import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square-hinter',
  template: `
    <button nbButton hero status="primary" size="giant" fullWidth *ngIf="result == 'blue'">{{value}}</button>
    <button nbButton hero status="danger" size="giant" fullWidth *ngIf="result == 'red'">{{value}}</button>
    <button nbButton hero status="warning" size="giant" fullWidth *ngIf="result == 'neutral'">{{value}}</button>
    <button nbButton hero status="info" size="giant" fullWidth *ngIf="result == 'kill'">{{value}}</button>
  `,
  styles: ['']
})
export class SquareHinterComponent {

  @Input('value') value;
  @Input('result') result: "red" | "blue" | "neutral" | "death";

}
