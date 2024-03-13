/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Features } from './Features';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__MediaResults } from './TwitterDL__models__Timeline__MediaResults';
import type { TwitterDL__models__Timeline__OriginalInfo } from './TwitterDL__models__Timeline__OriginalInfo';
import type { TwitterDL__models__Timeline__Sizes } from './TwitterDL__models__Timeline__Sizes';
export type TwitterDL__models__Timeline__MediaItem = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    features?: Features;
    sizes?: TwitterDL__models__Timeline__Sizes;
    original_info?: TwitterDL__models__Timeline__OriginalInfo;
    media_results?: TwitterDL__models__Timeline__MediaResults;
};

