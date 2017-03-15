/**
 * VideoShortDescr model
 */
export class VideoShortDescr {
  constructor(
    public titleRu: string,
    public titleEn: string,
    public imageUrl: string,
    public url: string,
    public season: number,
    public descr: string
  ) {

  }
}
