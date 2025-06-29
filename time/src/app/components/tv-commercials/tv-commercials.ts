import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

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
    ]
    videoInterval!: NodeJS.Timeout;
    @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
    
    startTimer() {
        this.videoPlayer.nativeElement.play();
    }
}

//
