import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base';

import { NewsComponent } from './news';
import { NewsListComponent } from './news-list/news-list.component';

@NgModule({
    imports: [
        CommonModule,
        BaseModule
    ],
    declarations: [
        NewsComponent,
        NewsListComponent
    ],
    providers: [
    ],
    exports: [
        NewsListComponent
    ]
})
export class NewsModule {
}
