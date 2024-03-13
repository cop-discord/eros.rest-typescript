/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Features1 } from './Features1';
import type { OriginalInfo1 } from './OriginalInfo1';
import type { TwitterDL__models__Timeline__ExtMediaAvailability } from './TwitterDL__models__Timeline__ExtMediaAvailability';
import type { TwitterDL__models__Timeline__MediaResults1 } from './TwitterDL__models__Timeline__MediaResults1';
import type { TwitterDL__models__Timeline__Sizes1 } from './TwitterDL__models__Timeline__Sizes1';
export type TwitterDL__models__Timeline__MediaItem1 = {
    display_url?: string;
    expanded_url?: string;
    id_str?: string;
    indices?: Array<number>;
    media_key?: string;
    media_url_https?: string;
    type?: string;
    url?: string;
    ext_media_availability?: TwitterDL__models__Timeline__ExtMediaAvailability;
    features?: Features1;
    sizes?: TwitterDL__models__Timeline__Sizes1;
    original_info?: OriginalInfo1;
    media_results?: TwitterDL__models__Timeline__MediaResults1;
};

