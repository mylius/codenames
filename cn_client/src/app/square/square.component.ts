import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-square',
  template: `
    <button nbButton status="basic" *ngIf="!clicked" fullWidth size="giant" [disabled]="disable">{{value}}</button>
    <button nbButton hero status="primary" size="giant" fullWidth *ngIf="result == 'blue' && clicked==1"  [disabled]="disable_bool">{{value}}</button>
    <button nbButton hero status="danger" size="giant" fullWidth *ngIf="result == 'red' && clicked==1"  [disabled]="disable_bool">{{value}}</button>
    <button nbButton hero status="warning" size="giant" fullWidth *ngIf="result == 'neutral' && clicked==1"  [disabled]="disable_bool">{{value}}</button>
    <button nbButton hero status="info" size="giant" fullWidth *ngIf="result == 'kill' && clicked==1"  [disabled]="disable_bool">{{value}}</button>
  `,
  styles: ['']
})
export class SquareComponent {

  @Input('value') value;
  @Input('result') result: "red" | "blue" | "neutral" | "death";
  @Input('clicked') clicked;
  @Input('disable') disable;


  convert(arr) {
    var arr2: Boolean[];
    for (var item in arr) {
      arr2.push(Boolean(arr[item]))
    }
    return arr2;
  }
  disable_bool = this.convert(this.disable);

}
