import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { News } from '../models/news.model';
import { Category } from '../models/category.model';
import { VideoCommonInfo } from '../models/video-common-info.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

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
            .then(response => response.json().data as News[])
            .catch(this.handleError);
    }

    getCommonCategories(): Promise<Category[]> {
        const url = this.compileUrl('common-categories');
        return this.$http.get(url)
            .toPromise()
            .then(response => response.json().data as Category[])
            .catch(this.handleError);
    }

    filterVideos(categoryId: string): Promise<VideoCommonInfo[]> {
        const url = this.compileUrl(`filter-videos&category=${categoryId}`);
        return this.$http.get(url)
            .toPromise()
            .then(response => response.json().data as VideoCommonInfo[])
            .catch(this.handleError);
    }

    getNewsObs(): Observable<News[]> {
        const url = this.compileUrl('news');
        return this.$http.get(url)
            .map((response: Response) => this.extractDataObsArr<News>(response))
            .catch(this.handleErrorObs);
    }

    getCommonCategoriesObs(): Observable<Category[]> {
        const url = this.compileUrl('common-categories');
        return this.$http.get(url)
            .map((response: Response) => this.extractDataObsArr<Category>(response))
            .catch(this.handleErrorObs);
    }

    filterVideosObs(categoryId: string): Observable<VideoCommonInfo[]> {
        const url = this.compileUrl(`filter-videos&category=${categoryId}`);
        return this.$http.get(url)
            .map((response: Response) => this.extractDataObsArr<VideoCommonInfo>(response))
            .catch(this.handleErrorObs);
    }

    private handleError(error: any): Promise<any> {
        // for demo purposes only
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private extractDataObsArr<T>(response: Response): T[] {
        return <T[]>response.json().data || [];
    }

    private handleErrorObs(error: Response | any): Observable<any> {
        console.log(error);
        // error for the caller
        return Observable.throw(error);
    }
}
