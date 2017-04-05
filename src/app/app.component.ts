import { Component, Inject, OnInit, OnDestroy, OpaqueToken, ViewChild } from '@angular/core';

import { VideoCommonInfo } from './components/base/models/video-common-info.model';
import { News } from './components/base/models/news.model';

import { PortalService } from './components/base/services/portal.service';
import { UserService } from './components/base/services/user.service';
import { Category } from './components/base/models/category.model';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { STRINGS_SERVICE_TOKEN } from './components/base/services/strings.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    rightSideBarVisible: boolean = true;

    newsList: News[];
    commonCategories: Category[];
    selectedCategory: Category;
    videosList: VideoCommonInfo[];
    selectedVideo: VideoCommonInfo;

    // Promise / Observable mode
    httpPromiseMode = false;
    //

    private _subscriptions: Subscription[] = [];

    @ViewChild(CategoriesListComponent) private categoriesListComponent: CategoriesListComponent;

    constructor(
        private portalService: PortalService,
        public userService: UserService,
        @Inject(STRINGS_SERVICE_TOKEN) public strings: { string }
    ) {
    }

    ngOnInit() {
        // Promise mode
        if (this.httpPromiseMode) {
            this.portalService.getNews()
                .then(news => this.newsList = news);

            this.portalService.getCommonCategories()
                .then(categories => this.commonCategories = categories);
        } else {
            let sub = this.portalService.getNewsObs()
                .subscribe((news: News[]) => this.newsList = news);
            this._subscriptions.push(sub);

            sub = this.portalService.getCommonCategoriesObs()
                .subscribe((categories: Category[]) => this.commonCategories = categories);
            this._subscriptions.push(sub);
        }
    }

    ngOnDestroy(): void {
        if (!this.httpPromiseMode) {
            this._subscriptions.forEach(sub => sub.unsubscribe());
        }
    }

    onToggleRightSidebarClick() {
        this.rightSideBarVisible = !this.rightSideBarVisible;
    }

    onSelectCategory(category: Category) {
        this.selectedCategory = category;
        this.videosList = null;
        this.selectedVideo = null;

        if (category) {
            if (this.httpPromiseMode) {
                this.portalService.filterVideos(category.id)
                    .then(videosList => this.videosList = videosList);
            } else {
                const sub = this.portalService.filterVideosObs(category.id)
                    .subscribe((videosList: VideoCommonInfo[]) => this.videosList = videosList);
                this._subscriptions.push(sub);
            }
        }
    }

    onVideoRemoveClick(video: VideoCommonInfo) {
        const index = this.videosList.indexOf(video);
        if (index > -1) {
            this.videosList.splice(index, 1);
        }
    }

    onSelectVideoClick(video: VideoCommonInfo) {
        this.selectedVideo = video;
    }

    onCategoriesResetClick() {
        this.categoriesListComponent.onCategoryClick(null);
    }

    onCategoriesLastClick() {
        const lastCategory = this.categoriesListComponent.categories
            && this.categoriesListComponent.categories[this.categoriesListComponent.categories.length - 1];

        if (lastCategory) {
            this.categoriesListComponent.onCategoryClick(lastCategory);
        }
    }

    onUpdateVideo({ titleRu, titleEn, year }) {
        this.selectedVideo.title_ru = titleRu;
        this.selectedVideo.title_en = titleEn;
        this.selectedVideo.year = year;
    }

    onAddToFavoriteClick(video: VideoCommonInfo) {
        this.userService.addToFavorite(video);
    }

    onRemoveFromFavoriteClick(video: VideoCommonInfo) {
        this.userService.removeFromFavorite(video);
    }
}
