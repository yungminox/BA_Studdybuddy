import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  timeLeft = 1500; // 25 Minuten
  interval: any;

  get minutes() {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds() {
    return this.timeLeft % 60;
  }


  start() {
    if (!this.interval) {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stop();
      }
    }, 1000);
  }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.timeLeft = 1500;
  }
 
}
