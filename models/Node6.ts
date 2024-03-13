/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dimensions } from './Dimensions';
import type { EdgeMediaToTaggedUser2 } from './EdgeMediaToTaggedUser2';
import type { InstagramDL__models__User__Owner } from './InstagramDL__models__User__Owner';
import type { InstagramDL__models__User__SharingFrictionInfo } from './InstagramDL__models__User__SharingFrictionInfo';
export type Node6 = {
    __typename?: string;
    id?: string;
    shortcode?: string;
    dimensions?: Dimensions;
    display_url?: string;
    edge_media_to_tagged_user?: EdgeMediaToTaggedUser2;
    fact_check_overall_rating?: null;
    fact_check_information?: null;
    gating_info?: null;
    sharing_friction_info?: InstagramDL__models__User__SharingFrictionInfo;
    media_overlay_info?: null;
    media_preview?: string;
    owner?: InstagramDL__models__User__Owner;
    is_video?: boolean;
    has_upcoming_event?: boolean;
    accessibility_caption?: string;
};

