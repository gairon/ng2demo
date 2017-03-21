import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { VideoCommonInfo } from './components/base/models/video-common-info.model';
import { News } from './components/base/models/news.model';

import { PortalService } from './components/base/services/portal.service';
import { UserService } from './components/base/services/user.service';
import { Category } from './components/base/models/category.model';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { STRINGS } from './components/base/services/strings.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    rightSideBarVisible: boolean = true;

    newsList: News[];
    commonCategories: Category[];
    selectedCategory: Category;
    videosList: VideoCommonInfo[];
    selectedVideo: VideoCommonInfo;

    @ViewChild(CategoriesListComponent) private categoriesListComponent: CategoriesListComponent;
    @ViewChild('sampleButton') private buttonNode: ElementRef;

    constructor(
        private portalService: PortalService,
        public userService: UserService,
        @Inject(STRINGS) private strings: { string }
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

    onSelectCategory(category: Category) {
        this.selectedCategory = category;
        this.videosList = null;
        this.selectedVideo = null;

        if (category) {
            this.portalService.filterVideos(category.id)
                .then(videosList => this.videosList = videosList);
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

    onTestDomAccess() {
        // access to Node properties
        this.buttonNode.nativeElement.style.backgroundColor = 'lime';
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
