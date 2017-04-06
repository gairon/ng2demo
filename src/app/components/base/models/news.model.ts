import {IMultiLangTitles} from './imulti-lang-titles';

/**
 * News model
 */
export class News implements IMultiLangTitles {
    title_ru: string;
    title_en: string;

    constructor(
        public video_id: string,
        public date: string,
        public status: string,
        public title: string,
        public video_image_file: string,
        public video_season: string,
        public video_title_en: string,
        public video_title_ru: string
    ) {
        this.title_ru = video_title_ru;
        this.title_en = video_title_en;
    }
}
