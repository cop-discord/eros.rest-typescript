/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Timeline__AffiliatesHighlightedLabel } from './TwitterDL__models__Timeline__AffiliatesHighlightedLabel';
import type { TwitterDL__models__Timeline__Legacy } from './TwitterDL__models__Timeline__Legacy';
import type { TwitterDL__models__Timeline__Professional } from './TwitterDL__models__Timeline__Professional';
export type TwitterDL__models__Timeline__Result2 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: TwitterDL__models__Timeline__AffiliatesHighlightedLabel;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: TwitterDL__models__Timeline__Legacy;
    professional?: TwitterDL__models__Timeline__Professional;
    super_follow_eligible?: boolean;
};

