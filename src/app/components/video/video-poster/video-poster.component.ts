import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoCommonInfo } from '../../base/models/video-common-info.model';

@Component({
    selector: 'video-poster',
    templateUrl: 'video-poster.component.html',
    styleUrls: ['video-poster.component.css']
})
export class VideoPosterComponent implements OnInit {
    @Input() video: VideoCommonInfo;
    @Output() removeClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();

    constructor() {
    }

    ngOnInit() {
    }

    onRemoveClick() {
        this.removeClick.emit(this.video);
    }
}
