import { Component, Input, EventEmitter, Output, Inject, SkipSelf, Optional } from '@angular/core';
import { Category } from '../../base/models/category.model';

@Component({
    selector: 'categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
    @Input() categories: Array<Category>;
    @Output() selectCategory: EventEmitter<Category> = new EventEmitter<Category>();

    selectedCategory: Category;

    constructor(
    ) {
    }

    onCategoryClick(category: Category) {
        this.selectedCategory = category;
        this.selectCategory.emit(category);
    }
}
