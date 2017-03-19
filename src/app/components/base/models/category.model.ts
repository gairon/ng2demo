/**
 * Category model
 */
export class Category {
    constructor(
        public id: number,
        public title_ru: string,
        public subcategory_count: number,
        public video_count: number
    ) {
    }
}
