import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  focusTime = 1500; // 25 Minuten
  breakTime = 300; // 5 Minuten
  sessions = 4;

  timeLeft = this.focusTime
  sessionsLeft = this.sessions;
  interval: any;
  fokus =  true;

  get minutes() {
    return Math.floor(this.timeLeft / 60);
  }

  get seconds() {
    return this.timeLeft % 60;
  }

  get modus() {
    return this.fokus ? "Fokus" : "Break";
  }

  get session(){
  if (this.sessionsLeft === 0) {
    return `${this.sessions}/${this.sessions}`;
  }
  return `${this.sessions - this.sessionsLeft + 1}/${this.sessions}`;
  }

  get finished(){
    if (this.sessionsLeft === 0){ return "You finished ^-^"}else {return}
  }


  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stop();

        if (this.sessionsLeft > 0) {
          if (this.fokus) {
            this.startBreak();
          } else {
            this.sessionsLeft--;
            if (this.sessionsLeft > 0) {
              this.startFocus();
            }
          }
        }
      }
    }, 1000);
  }

  

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.fokus =  true;
    this.sessionsLeft = this.sessions;
    this.timeLeft = this.focusTime;
  }

 startBreak() {
    this.fokus = false;
    this.timeLeft = this.breakTime;
    this.start();
  }

  startFocus() {
    this.fokus = true;
    this.timeLeft = this.focusTime;
    this.start();
  }
  }