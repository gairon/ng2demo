import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { News } from '../../base/models/news.model';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
    @Input() news: News;
    @Output() addClick: EventEmitter<News> = new EventEmitter<News>();

    @HostBinding('class.news_hovered') hovered: boolean = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.hovered = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hovered = false;
    }

    constructor() {
    }

    ngOnInit() {
    }

    onAddClick($event: MouseEvent) {
        $event.stopPropagation();

        this.addClick.emit(this.news);
    }
}
