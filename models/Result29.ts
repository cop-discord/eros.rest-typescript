/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Legacy19 } from './Legacy19';
import type { Professional10 } from './Professional10';
export type Result29 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: Record<string, any>;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: Legacy19;
    professional?: Professional10;
    super_follow_eligible?: boolean;
};

