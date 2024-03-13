/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AllowDownloadStatus } from './AllowDownloadStatus';
import type { Features5 } from './Features5';
import type { MediaResults5 } from './MediaResults5';
import type { OriginalInfo5 } from './OriginalInfo5';
import type { Sizes5 } from './Sizes5';
import type { TwitterDL__models__Timeline__AdditionalMediaInfo2 } from './TwitterDL__models__Timeline__AdditionalMediaInfo2';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__VideoInfo3 } from './TwitterDL__models__Timeline__VideoInfo3';
export type MediaItem5 = {
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
    sizes?: Sizes5;
    original_info?: OriginalInfo5;
    video_info?: TwitterDL__models__Timeline__VideoInfo3;
    media_results?: MediaResults5;
    features?: Features5;
    allow_download_status?: AllowDownloadStatus;
};

