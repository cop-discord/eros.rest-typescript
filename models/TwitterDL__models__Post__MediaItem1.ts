/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Post__AdditionalMediaInfo } from './TwitterDL__models__Post__AdditionalMediaInfo';
import type { TwitterDL__models__Post__ExtMediaAvailability } from './TwitterDL__models__Post__ExtMediaAvailability';
import type { TwitterDL__models__Post__MediaResults1 } from './TwitterDL__models__Post__MediaResults1';
import type { TwitterDL__models__Post__OriginalInfo } from './TwitterDL__models__Post__OriginalInfo';
import type { TwitterDL__models__Post__Sizes1 } from './TwitterDL__models__Post__Sizes1';
import type { TwitterDL__models__Post__VideoInfo1 } from './TwitterDL__models__Post__VideoInfo1';
export type TwitterDL__models__Post__MediaItem1 = {
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
    sizes?: TwitterDL__models__Post__Sizes1;
    original_info?: TwitterDL__models__Post__OriginalInfo;
    video_info?: TwitterDL__models__Post__VideoInfo1;
    media_results?: TwitterDL__models__Post__MediaResults1;
};

