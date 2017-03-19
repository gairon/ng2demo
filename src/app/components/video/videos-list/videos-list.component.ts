import {
    Component, OnInit, ViewChildren, Output, EventEmitter, Input
} from '@angular/core';

import { VideoCommonInfo } from '../../base/models/video-common-info.model';
import { VideoPosterComponent } from '../video-poster/video-poster.component';

@Component({
    selector: 'videos-list',
    templateUrl: 'videos-list.component.html',
    styleUrls: ['videos-list.component.css']
})
export class VideosListComponent implements OnInit {
    @Input() videosList: Array<VideoCommonInfo>;
    @Output() removeVideoClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();

    @ViewChildren(VideoPosterComponent) private videoPosters: VideoPosterComponent;

    constructor() {
    }

    ngOnInit() {
    }

    onVideoRemoveClick(video: VideoCommonInfo) {
        this.removeVideoClick.emit(video);
    }
}
