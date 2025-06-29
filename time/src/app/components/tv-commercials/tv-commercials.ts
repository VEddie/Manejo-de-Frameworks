import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'tv-commercials',
    imports: [CommonModule],
    templateUrl: './tv-commercials.html',
    styleUrl: './tv-commercials.css',
})
export class TvCommercials {
    timeLeft = 5;
    interval!: NodeJS.Timeout;

    currentSrc: number = 0;
    videoInterval!: NodeJS.Timeout;
    videoList = [
        '/videos/video1.jpg',
        '/videos/video2.jpg',
        '/videos/video3.jpg',
    ]

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) this.timeLeft--;
            else this.pauseTimer();
        }, 1000);

        this.videoInterval = setInterval(() => {
            this.currentSrc = Math.floor(Math.random() * 3);
        }, 2000)
    }

    pauseTimer() {
        clearInterval(this.interval);
        clearInterval(this.videoInterval);
    }
}

//
