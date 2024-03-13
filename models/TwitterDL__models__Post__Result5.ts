/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Post__Legacy2 } from './TwitterDL__models__Post__Legacy2';
import type { TwitterDL__models__Post__Professional1 } from './TwitterDL__models__Post__Professional1';
export type TwitterDL__models__Post__Result5 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: Record<string, any>;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: TwitterDL__models__Post__Legacy2;
    super_follow_eligible?: boolean;
    professional?: TwitterDL__models__Post__Professional1;
};

