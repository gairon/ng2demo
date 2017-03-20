import { Component, OnInit, OnChanges, Input, Output, EventEmitter, HostBinding, SimpleChanges } from '@angular/core';
import { VideoCommonInfo } from '../../base/models/video-common-info.model';

@Component({
    selector: 'video-poster',
    templateUrl: 'video-poster.component.html',
    styleUrls: ['video-poster.component.css']
})
export class VideoPosterComponent implements OnInit, OnChanges {
    @Input() video: VideoCommonInfo;

    @Input() selected: boolean;
    @HostBinding('class.video-poster_selected') isSelected: boolean;

    // FIXIT short way to change selected class!
    // @Input() @HostBinding('class.video-poster_selected') selected: boolean;

    @Output() removeClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();


    constructor() {
    }

    ngOnInit() {
        // FIXIT only for demo
        this.isSelected = false;
    }

    // FIXIT only for demo
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('selected') && !changes['selected'].isFirstChange()) {
            this.isSelected = changes['selected'].currentValue;
        }
    }

    onRemoveClick() {
        this.removeClick.emit(this.video);
    }
}
