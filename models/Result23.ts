/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Legacy16 } from './Legacy16';
import type { Professional7 } from './Professional7';
export type Result23 = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: Record<string, any>;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: Legacy16;
    professional?: Professional7;
};

