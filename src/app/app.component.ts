import { Component, VERSION } from '@angular/core';
import { bubbleData } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Empty Bubble Chart - Angular ' + VERSION.major;

  public chartData = bubbleData;
  public chartData1 = [
    { name: 'Series 1', series: [] },
    { name: 'Series 2', series: [] },
    { name: 'Series 3', series: [] },
  ]
}
