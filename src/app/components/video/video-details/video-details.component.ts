import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { VideoCommonInfo } from '../../base/models/video-common-info.model';

@Component({
    selector: 'video-details',
    templateUrl: 'video-details.component.html',
    styleUrls: ['video-details.component.css']
})
export class VideoDetailsComponent implements OnChanges {
    @Input() video: VideoCommonInfo;

    @Output() updateVideo: EventEmitter<{ titleRu: string, titleEn: string, year: string }> = new EventEmitter<{ titleRu: string, titleEn: string, year: string }>();

    editMode: boolean = false;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('video') && !changes['video'].isFirstChange()) {
            this.editMode = false;
        }
    }

    onEditClick() {
        this.editMode = true;
    }

    onUpdateClick(titleRu: string, titleEn: string, year: string) {
        this.updateVideo.emit({ titleRu, titleEn, year });
        this.editMode = false;
    }

    onCancelClick() {
        this.editMode = false;
    }

    callPhone(phone: string) {
        alert(phone);
    }
}
