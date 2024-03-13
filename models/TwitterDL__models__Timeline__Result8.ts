/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AffiliatesHighlightedLabel2 } from './AffiliatesHighlightedLabel2';
import type { TwitterDL__models__Timeline__Legacy4 } from './TwitterDL__models__Timeline__Legacy4';
import type { TwitterDL__models__Timeline__Professional2 } from './TwitterDL__models__Timeline__Professional2';
export type TwitterDL__models__Timeline__Result8 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: AffiliatesHighlightedLabel2;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: TwitterDL__models__Timeline__Legacy4;
    professional?: TwitterDL__models__Timeline__Professional2;
    super_follow_eligible?: boolean;
};

