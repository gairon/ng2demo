import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';

import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
    imports: [
        CommonModule,
        BaseModule
    ],
    declarations: [
        CategoriesListComponent
    ],
    providers: [
    ],
    exports: [
        CategoriesListComponent
    ]
})
export class CategoriesModule {
}
