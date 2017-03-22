import { Component, ElementRef, Inject, OnInit, OpaqueToken, Optional, SkipSelf, ViewChild } from '@angular/core';

import { VideoCommonInfo } from './components/base/models/video-common-info.model';
import { News } from './components/base/models/news.model';

import { PortalService } from './components/base/services/portal.service';
import { UserService } from './components/base/services/user.service';
import { Category } from './components/base/models/category.model';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { STRINGS_SERVICE_TOKEN } from './components/base/services/strings.service';
import { RAVE_GEN_SERVICE_SHARED_TOKEN, RaveGenerator } from './components/base/services/rave-gen.factory';

const RAVE_GEN_SERVICE_TOKEN1: OpaqueToken = new OpaqueToken('RaveServiceGen1');
const RAVE_GEN_SERVICE_TOKEN2: OpaqueToken = new OpaqueToken('RaveServiceGen2');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        { provide: RAVE_GEN_SERVICE_TOKEN1, useFactory: RaveGenerator(20) },
        { provide: RAVE_GEN_SERVICE_SHARED_TOKEN, useFactory: RaveGenerator(20) }
    ]
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
        @Inject(STRINGS_SERVICE_TOKEN) public strings: { string },
        @Inject(RAVE_GEN_SERVICE_TOKEN1) public raveStr: string,
        @Optional() @Inject(RAVE_GEN_SERVICE_TOKEN2) public raveStr2: string
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
