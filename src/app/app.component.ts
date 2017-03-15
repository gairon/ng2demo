import {Component, OnInit} from '@angular/core';

import { VideoService } from './components/video/services/video.service';

import { News } from './components/video/model/news.model';
import { VideoShortDescr } from './components/video/model/video-short-descr.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NG2 Demo App is working!';
  subTitle = 'this app is very simple!';

  footer = 'Created at 2017.';

  listVisible: boolean = true;

  newsList: Array<News>;
  videoShortDescrList: Array<VideoShortDescr>;

  constructor(
    public videoService: VideoService
  ) {
  }

  ngOnInit() {
    this.newsList = this.videoService.getNews();
    this.videoShortDescrList = this.videoService.getVideoShortDescrList();
  }

  onToggleClick() {
    this.listVisible = !this.listVisible;
  }

  onNewsClick(news: News) {
    alert(`Should be redirection onto ${news.titleRu}`);
  }

  onVideoClick(video: VideoShortDescr) {
    alert(`Should be redirection onto ${video.titleRu}`);
  }
}
