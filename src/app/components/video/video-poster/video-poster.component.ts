import { Component, OnInit, OnChanges, Input, Output, EventEmitter, HostBinding, SimpleChanges } from '@angular/core';
import { VideoCommonInfo } from '../../base/models/video-common-info.model';
import { MultilangPipe } from '../../base/pipes/multilang.pipe';

@Component({
    selector: 'video-poster',
    templateUrl: 'video-poster.component.html',
    styleUrls: ['video-poster.component.css'],
    providers: [ MultilangPipe ]
})
export class VideoPosterComponent implements OnInit, OnChanges {
    @Input() video: VideoCommonInfo;

    @Input() selected: boolean;
    @HostBinding('class.video-poster_selected') isSelected: boolean;
    @Input() @HostBinding('class.video-poster_favorite') favorite: boolean;

    // FIXIT short way to change selected class!
    // @Input() @HostBinding('class.video-poster_selected') selected: boolean;

    @Output() removeClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();
    @Output() addToFavoriteClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();
    @Output() removeFromFavoriteClick: EventEmitter<VideoCommonInfo> = new EventEmitter<VideoCommonInfo>();

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

    onRemoveClick($event) {
        this.removeClick.emit(this.video);
    }

    onAddToFavoriteClick($event) {
        this.addToFavoriteClick.emit(this.video);
        $event.stopPropagation();
    }

    onRemoveFromFavoriteClick($event) {
        this.removeFromFavoriteClick.emit(this.video);
        $event.stopPropagation();
    }
}
