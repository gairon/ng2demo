/**
 * News model
 */
export class News {
  constructor(
    public titleRu: string,
    public titleEn: string,
    public imageUrl: string,
    public url: string,
    public season: number,
    public additional: string
  ) {

  }
}
