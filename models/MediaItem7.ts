/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalMediaInfo5 } from './AdditionalMediaInfo5';
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features7 } from './Features7';
import type { MediaResults7 } from './MediaResults7';
import type { OriginalInfo7 } from './OriginalInfo7';
import type { Sizes7 } from './Sizes7';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { VideoInfo5 } from './VideoInfo5';
export type MediaItem7 = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    features?: Features7;
    sizes?: Sizes7;
    original_info?: OriginalInfo7;
    media_results?: MediaResults7;
    allow_download_status?: AllowDownloadStatus;
    source_status_id_str?: string;
    source_user_id_str?: string;
    additional_media_info?: AdditionalMediaInfo5;
    video_info?: VideoInfo5;
};

