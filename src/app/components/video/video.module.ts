import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './news';
import { VideoShortDescrComponent } from './video-short-descr';
import { VideoService } from './services/video.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsComponent,
    VideoShortDescrComponent
  ],
  providers: [
    VideoService
  ],
  exports: [
    NewsComponent,
    VideoShortDescrComponent
  ]
})
export class VideoModule { }
