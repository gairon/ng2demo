import {VideoCommon} from '../../base/models/video-common-info.model';

/**
 * User model
 */
export class User {
    constructor(
        public login: string,
        public password: string,
        public subscribedToNews: boolean,
        public favoriteVideos: Array<VideoCommon>
    ) {
    }
}
