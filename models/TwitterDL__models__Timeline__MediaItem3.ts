/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdditionalMediaInfo1 } from './AdditionalMediaInfo1';
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features3 } from './Features3';
import type { OriginalInfo3 } from './OriginalInfo3';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__MediaResults3 } from './TwitterDL__models__Timeline__MediaResults3';
import type { TwitterDL__models__Timeline__Sizes3 } from './TwitterDL__models__Timeline__Sizes3';
import type { TwitterDL__models__Timeline__VideoInfo1 } from './TwitterDL__models__Timeline__VideoInfo1';
export type TwitterDL__models__Timeline__MediaItem3 = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    source_status_id_str?: string;
    source_user_id_str?: string;
    type?: string;
    url?: string;
    additional_media_info?: AdditionalMediaInfo1;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    sizes?: TwitterDL__models__Timeline__Sizes3;
    original_info?: OriginalInfo3;
    video_info?: TwitterDL__models__Timeline__VideoInfo1;
    media_results?: TwitterDL__models__Timeline__MediaResults3;
    features?: Features3;
    allow_download_status?: AllowDownloadStatus;
};

