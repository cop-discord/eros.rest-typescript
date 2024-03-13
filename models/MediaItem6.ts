/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalMediaInfo4 } from './AdditionalMediaInfo4';
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features6 } from './Features6';
import type { MediaResults6 } from './MediaResults6';
import type { OriginalInfo6 } from './OriginalInfo6';
import type { Sizes6 } from './Sizes6';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { VideoInfo4 } from './VideoInfo4';
export type MediaItem6 = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    features?: Features6;
    sizes?: Sizes6;
    original_info?: OriginalInfo6;
    media_results?: MediaResults6;
    allow_download_status?: AllowDownloadStatus;
    source_status_id_str?: string;
    source_user_id_str?: string;
    additional_media_info?: AdditionalMediaInfo4;
    video_info?: VideoInfo4;
};

