import { Inject, Injectable } from '@angular/core';
import { FavoriteVideo } from '../models/favorite-video.model';
import { VideoCommonInfo } from '../models/video-common-info.model';
import { WINDOW } from './window.service';

const LS_FAVORITE_VIDEOS_KEY = 'favorite_videos';

@Injectable()
export class UserService {
    private localStorage: Storage;
    private favoriteVideos: FavoriteVideo[] = [];

    constructor(@Inject(WINDOW) window: Window) {
        this.localStorage = window.localStorage;

        this.initFavoriteVideos();
    }

    getFavoriteVideos(): FavoriteVideo[] {
        return this.favoriteVideos;
    }

    isFavoriteVideo(video: VideoCommonInfo): boolean {
        return this.favoriteVideos.some(favVideo => favVideo.id === video.id);
    }

    addToFavorite(video: VideoCommonInfo) {
        const index = this.favoriteVideos.findIndex(favVideo => favVideo.id === video.id);
        if (index === -1) {
            this.favoriteVideos.push(new FavoriteVideo(
                video.id,
                video.title_ru,
                video.title_en,
                video.image_file
            ));

            this.updateLocalStorage();
        }
    }

    removeFromFavorite(video: VideoCommonInfo) {
        const index = this.favoriteVideos.findIndex(favVideo => favVideo.id === video.id);
        if (index > -1) {
            this.favoriteVideos.splice(index, 1);
            this.updateLocalStorage();
        }
    }

    private initFavoriteVideos() {
        const json = this.localStorage.getItem(LS_FAVORITE_VIDEOS_KEY);
        if (json) {
            this.favoriteVideos = JSON.parse(json) as FavoriteVideo[];
        }
    }

    private updateLocalStorage() {
        const json = JSON.stringify(this.favoriteVideos);
        this.localStorage.setItem(LS_FAVORITE_VIDEOS_KEY, json);
    }
}
