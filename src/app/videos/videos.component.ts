import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
    activeVideos: string[] = ["https://www.youtube.com/embed/ZmBwGLE041k"];

    constructor() { }

    ngOnInit() {
    }

}
