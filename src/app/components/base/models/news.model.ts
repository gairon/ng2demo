/**
 * News model
 */
export class News {
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
    }
}
