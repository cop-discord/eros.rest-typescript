/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AffiliatesHighlightedLabel1 } from './AffiliatesHighlightedLabel1';
import type { TwitterDL__models__Timeline__Legacy1 } from './TwitterDL__models__Timeline__Legacy1';
import type { TwitterDL__models__Timeline__Professional1 } from './TwitterDL__models__Timeline__Professional1';
export type TwitterDL__models__Timeline__Result4 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: AffiliatesHighlightedLabel1;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: TwitterDL__models__Timeline__Legacy1;
    professional?: TwitterDL__models__Timeline__Professional1;
};

