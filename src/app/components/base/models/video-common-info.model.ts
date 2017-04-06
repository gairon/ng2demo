import {IMultiLangTitles} from './imulti-lang-titles';

/**
 * Video common info model
 */
export class VideoCommonInfo implements IMultiLangTitles {
    // virtual field
    public cost: number = 100;

    constructor(
        public id: string,
        public title_ru: string,
        public title_en: string,
        public image_file: string,
        public year: string,
        public description: string,
        public hd_rating: number,
        public hd_votes: number,
        public imdb_rating: number,
        public imdb_votes: number,
        public created: number
    ) {
        this.cost = hd_rating * 20
        this.created = this.created * 1000;
    }
}
