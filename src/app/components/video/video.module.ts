import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base';

import { VideoPosterComponent } from './video-poster';
import { VideosListComponent } from './videos-list';

@NgModule({
    imports: [
        CommonModule,
        BaseModule
    ],
    declarations: [
        VideoPosterComponent,
        VideosListComponent
    ],
    providers: [
    ],
    exports: [
        VideoPosterComponent,
        VideosListComponent
    ]
})
export class VideoModule {
}
