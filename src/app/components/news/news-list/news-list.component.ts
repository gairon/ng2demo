import {
    Component, OnInit, ViewChildren, AfterViewInit,
    AfterViewChecked, Output, EventEmitter, Input
} from '@angular/core';
import { NewsComponent } from '../news';

import { News } from '../../base/models/news.model';

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit, AfterViewInit, AfterViewChecked {
    @Input() newsList: Array<News>;

    @ViewChildren(NewsComponent) private newsListItems: NewsComponent;

    @Output() addClick: EventEmitter<News> = new EventEmitter<News>();

    constructor() {
    }

    ngOnInit() {
    }

    onNewsClick(news: News) {
        alert(`Should be redirection onto ${news.video_title_ru}`);
    }

    ngAfterViewInit(): void {
        console.log('After view init', this.newsListItems);
    }

    ngAfterViewChecked(): void {
        console.log('After view checked', this.newsListItems);
    }

    onAddClick(news: News) {
        this.addClick.emit(news);
    }
}
