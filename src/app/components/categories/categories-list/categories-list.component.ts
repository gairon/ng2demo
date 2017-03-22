import { Component, Input, EventEmitter, Output, Inject, SkipSelf, Optional } from '@angular/core';
import { Category } from '../../base/models/category.model';
import { RAVE_GEN_SERVICE_SHARED_TOKEN, RaveGenerator } from '../../base/services/rave-gen.factory';

@Component({
    selector: 'categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css'],
    providers: [
        { provide: RAVE_GEN_SERVICE_SHARED_TOKEN, useFactory: RaveGenerator(2) }
    ]
})
export class CategoriesListComponent {
    @Input() categories: Array<Category>;
    @Output() selectCategory: EventEmitter<Category> = new EventEmitter<Category>();

    selectedCategory: Category;

    constructor(
        // show that used parent generator instead elf one
        @SkipSelf() @Optional() @Inject(RAVE_GEN_SERVICE_SHARED_TOKEN) public parentRaveStr: string,
        @Optional() @Inject(RAVE_GEN_SERVICE_SHARED_TOKEN) public ownRaveStr: string
    ) {
    }

    onCategoryClick(category: Category) {
        this.selectedCategory = category;
        this.selectCategory.emit(category);
    }
}
