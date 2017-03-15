import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { VideoShortDescr } from '../model/video-short-descr.model';

@Component({
  selector: 'video-short-descr',
  templateUrl: './video-short-descr.component.html',
  styleUrls: ['./video-short-descr.component.css']
})
export class VideoShortDescrComponent implements OnInit {
  @Input() video: VideoShortDescr;

  constructor() { }

  ngOnInit() {
  }

}
