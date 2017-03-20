import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base';

import { VideoPosterComponent } from './video-poster';
import { VideosListComponent } from './videos-list';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
    imports: [
        CommonModule,
        BaseModule
    ],
    declarations: [
        VideoPosterComponent,
        VideosListComponent,
        VideoDetailsComponent
    ],
    providers: [
    ],
    exports: [
        VideoPosterComponent,
        VideosListComponent,
        VideoDetailsComponent
    ]
})
export class VideoModule {
}
