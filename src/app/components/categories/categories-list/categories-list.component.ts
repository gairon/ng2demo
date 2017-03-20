import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../base/models/category.model';

@Component({
    selector: 'categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
    @Input() categories: Array<Category>;
    @Output() selectCategory: EventEmitter<Category> = new EventEmitter<Category>();

    selectedCategory: Category;

    constructor() {
    }

    ngOnInit() {
    }

    onCategoryClick(category: Category) {
        this.selectedCategory = category;
        this.selectCategory.emit(category);
    }
}
