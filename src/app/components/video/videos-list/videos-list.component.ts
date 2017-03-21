import {
    Component, OnInit, ViewChildren, Output, EventEmitter, Input
} from '@angular/core';

import { VideoCommonInfo } from '../../base/models/video-common-info.model';
import { VideoPosterComponent } from '../video-poster/video-poster.component';
import { UserService } from '../../base/services/user.service';

@Component({
    selector: 'videos-list',
    templateUrl: 'videos-list.component.html',
    styleUrls: ['videos-list.component.css']
})
export class VideosListComponent implements OnInit {
    @Input() videosList: Array<VideoCommonInfo>;
    @Input() selectedVideo: VideoCommonInfo;

    @Output() removeVideoClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();
    @Output() selectVideoClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();

    @Output() addToFavoriteClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();
    @Output() removeFromFavoriteClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();

    @ViewChildren(VideoPosterComponent) private videoPosters: VideoPosterComponent;

    constructor(
        public userService: UserService
    ) {
    }

    ngOnInit() {
    }

    onVideoRemoveClick(video: VideoCommonInfo) {
        this.removeVideoClick.emit(video);

        if (this.selectedVideo && this.selectedVideo.id === video.id) {
            this.selectVideoClick.emit(null);
        }
    }

    onVideoClick(video: VideoCommonInfo) {
        this.selectedVideo = video;
        this.selectVideoClick.emit(video);
    }

    onAddToFavoriteClick(video: VideoCommonInfo) {
        this.addToFavoriteClick.emit(video);
    }

    onRemoveFromFavoriteClick(video: VideoCommonInfo) {
        this.removeFromFavoriteClick.emit(video);
    }
}
