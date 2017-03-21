import {
    Component, OnInit, Output, EventEmitter, Input
} from '@angular/core';
import { NewsComponent } from '../news';

import { News } from '../../base/models/news.model';

@Component({
    selector: 'news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
    @Input() newsList: Array<News>;

    @Output() addClick: EventEmitter<News> = new EventEmitter<News>();

    constructor() {
    }

    ngOnInit() {
    }

    onNewsClick(news: News) {
        // alert(`Should be redirection onto ${news.video_title_ru}`);
    }

    onAddClick(news: News) {
        this.addClick.emit(news);
    }
}
