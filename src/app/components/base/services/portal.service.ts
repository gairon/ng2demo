import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from '../models/news.model';
import { Category } from '../models/category.model';
import { VideoCommonInfo } from '../models/video-common-info.model';

@Injectable()
export class PortalService {
    private corsUrl = 'https://cors-anywhere.herokuapp.com';
    private baseUrl = 'http://hdserials.galanov.net/backend/model.php?skip_ua=yep';

    constructor(
        private $http: Http
    ) {
    }

    private compileUrl(requiestId: string) {
        return `${this.corsUrl}/${this.baseUrl}&id=${requiestId}`;
    }

    getNews(): Promise<News[]> {
        const url = this.compileUrl('news');
        return this.$http.get(url)
            .toPromise()
            .then(response => {
                return response.json().data as News[];
            })
            .catch(this.handleError);
    }

    getCommonCategories(): Promise<Category[]> {
        const url = this.compileUrl('common-categories');
        return this.$http.get(url)
            .toPromise()
            .then(response => {
                return response.json().data as Category[];
            })
            .catch(this.handleError);
    }

    filterVideos(categoryId: number) {
        const url = this.compileUrl(`filter-videos&category=${categoryId}`);
        return this.$http.get(url)
            .toPromise()
            .then(response => {
                return response.json().data as VideoCommonInfo[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
