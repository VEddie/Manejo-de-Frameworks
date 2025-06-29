import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { convertToSeconds, getTimer } from '../../utilities/functions';

@Component({
    selector: 'tv-commercials',
    imports: [CommonModule],
    templateUrl: './tv-commercials.html',
    styleUrl: './tv-commercials.css',
})
export class TvCommercials {
    videoList = [
        '/videos/kfc.mp4',
        '/videos/pringles.mp4',
        '/videos/toyota.mp4',
        '/videos/empire.mp4',
        '/videos/domino.mp4',
    ];
    timerInterval!: NodeJS.Timeout;
    videoInterval!: NodeJS.Timeout;
    isPlaying = false;
    @Input({ required: false }) hours: number = 0;
    @Input({ required: false }) minutes: number = 0;
    @Input({ required: true }) seconds: number = 0;
    timer!: number;

    @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

    ngOnInit() {
        this.timer = convertToSeconds(this.hours, this.minutes, this.seconds);
    }

    ngOnDestroy() {
        clearInterval(this.timerInterval);
        clearInterval(this.videoInterval);
    }

    start() {
        this.isPlaying = !this.isPlaying;

        this.timerInterval = setInterval(() => {
            this.timer--;

            if (this.timer === 0) {
                clearInterval(this.timerInterval);
                clearInterval(this.videoInterval);
                this.videoPlayer.nativeElement.src = 'videos/intro.mp4';
                this.videoPlayer.nativeElement.play();
                this.videoPlayer.nativeElement.loop = true;
            }
        }, 1000);

        // Component gets delayed, needs a fix.
        this.videoInterval = setInterval(() => {
            let i = Math.floor(Math.random() * this.videoList.length);
            this.videoPlayer.nativeElement.src = this.videoList[i];
            this.videoPlayer.nativeElement.play();
            console.log('new ad');
        }, 10000);
    }

    getTimeLeft() {
        return getTimer(this.timer);
    }
}

//
