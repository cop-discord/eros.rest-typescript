/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Post__AdditionalMediaInfo } from './TwitterDL__models__Post__AdditionalMediaInfo';
import type { TwitterDL__models__Post__ExtMediaAvailability } from './TwitterDL__models__Post__ExtMediaAvailability';
import type { TwitterDL__models__Post__MediaResults } from './TwitterDL__models__Post__MediaResults';
import type { TwitterDL__models__Post__OriginalInfo } from './TwitterDL__models__Post__OriginalInfo';
import type { TwitterDL__models__Post__Sizes } from './TwitterDL__models__Post__Sizes';
import type { TwitterDL__models__Post__VideoInfo } from './TwitterDL__models__Post__VideoInfo';
export type TwitterDL__models__Post__MediaItem = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    additional_media_info?: TwitterDL__models__Post__AdditionalMediaInfo;
    ext_media_availability?: TwitterDL__models__Post__ExtMediaAvailability;
    sizes?: TwitterDL__models__Post__Sizes;
    original_info?: TwitterDL__models__Post__OriginalInfo;
    video_info?: TwitterDL__models__Post__VideoInfo;
    media_results?: TwitterDL__models__Post__MediaResults;
};

