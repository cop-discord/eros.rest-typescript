/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features2 } from './Features2';
import type { OriginalInfo2 } from './OriginalInfo2';
import type { TwitterDL__models__Timeline__AdditionalMediaInfo } from './TwitterDL__models__Timeline__AdditionalMediaInfo';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__MediaResults2 } from './TwitterDL__models__Timeline__MediaResults2';
import type { TwitterDL__models__Timeline__Sizes2 } from './TwitterDL__models__Timeline__Sizes2';
import type { TwitterDL__models__Timeline__VideoInfo } from './TwitterDL__models__Timeline__VideoInfo';
export type TwitterDL__models__Timeline__MediaItem2 = {
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
    additional_media_info?: TwitterDL__models__Timeline__AdditionalMediaInfo;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    sizes?: TwitterDL__models__Timeline__Sizes2;
    original_info?: OriginalInfo2;
    video_info?: TwitterDL__models__Timeline__VideoInfo;
    media_results?: TwitterDL__models__Timeline__MediaResults2;
    features?: Features2;
    allow_download_status?: AllowDownloadStatus;
};

