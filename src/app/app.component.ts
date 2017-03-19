import { Component, OnInit } from '@angular/core';

import { VideoCommonInfo } from './components/base/models/video-common-info.model';
import { News } from './components/base/models/news.model';

import { PortalService } from './components/base/services/portal.service';
import { Category } from './components/base/models/category.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'NG2 Demo App is working!';
    subTitle = 'this app is very simple!';

    footer = 'Created at 2017.';

    rightSideBarVisible: boolean = true;

    newsList: News[];
    commonCategories: Category[];
    videosList: VideoCommonInfo[];

    constructor(
        public portalService: PortalService
    ) {
    }

    ngOnInit() {
        this.portalService.getNews().then(news => this.newsList = news);

        this.portalService.getCommonCategories()
            .then(categories => this.commonCategories = categories);
    }

    onToggleRightSidebarClick() {
        this.rightSideBarVisible = !this.rightSideBarVisible;
    }

    onAddNewsClick(news: News) {

    }

    onSelectCategory(category: Category) {
        this.videosList = null;
        this.portalService.filterVideos(category.id)
            .then(videosList => this.videosList = videosList);
    }

    onVideoRemoveClick(video: VideoCommonInfo) {
        const index = this.videosList.indexOf(video);
        if (index > -1) {
            this.videosList.splice(index, 1);
        }
    }
}
