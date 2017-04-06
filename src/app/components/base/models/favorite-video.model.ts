import {IMultiLangTitles} from './imulti-lang-titles';

/**
 * Video common info model
 */
export class FavoriteVideo implements IMultiLangTitles {
    constructor(
        public id: string,
        public title_ru: string,
        public title_en: string,
        public image_file: string
    ) {

    }
}
