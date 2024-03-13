/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features4 } from './Features4';
import type { MediaResults4 } from './MediaResults4';
import type { OriginalInfo4 } from './OriginalInfo4';
import type { Sizes4 } from './Sizes4';
import type { TwitterDL__models__Timeline__AdditionalMediaInfo2 } from './TwitterDL__models__Timeline__AdditionalMediaInfo2';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__VideoInfo2 } from './TwitterDL__models__Timeline__VideoInfo2';
export type MediaItem4 = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    additional_media_info?: TwitterDL__models__Timeline__AdditionalMediaInfo2;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    sizes?: Sizes4;
    original_info?: OriginalInfo4;
    video_info?: TwitterDL__models__Timeline__VideoInfo2;
    media_results?: MediaResults4;
    features?: Features4;
    allow_download_status?: AllowDownloadStatus;
};

