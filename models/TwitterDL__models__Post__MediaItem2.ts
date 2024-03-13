/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Post__AdditionalMediaInfo2 } from './TwitterDL__models__Post__AdditionalMediaInfo2';
import type { TwitterDL__models__Post__ExtMediaAvailability } from './TwitterDL__models__Post__ExtMediaAvailability';
import type { TwitterDL__models__Post__MediaResults2 } from './TwitterDL__models__Post__MediaResults2';
import type { TwitterDL__models__Post__OriginalInfo } from './TwitterDL__models__Post__OriginalInfo';
import type { TwitterDL__models__Post__Sizes2 } from './TwitterDL__models__Post__Sizes2';
import type { TwitterDL__models__Post__VideoInfo2 } from './TwitterDL__models__Post__VideoInfo2';
export type TwitterDL__models__Post__MediaItem2 = {
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
    additional_media_info?: TwitterDL__models__Post__AdditionalMediaInfo2;
    ext_media_availability?: TwitterDL__models__Post__ExtMediaAvailability;
    sizes?: TwitterDL__models__Post__Sizes2;
    original_info?: TwitterDL__models__Post__OriginalInfo;
    video_info?: TwitterDL__models__Post__VideoInfo2;
    media_results?: TwitterDL__models__Post__MediaResults2;
    ext_alt_text?: string;
};

