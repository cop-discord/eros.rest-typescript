/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageVersions21 } from './ImageVersions21';
import type { InstagramDL__models__Feed__SharingFrictionInfo } from './InstagramDL__models__Feed__SharingFrictionInfo';
import type { Usertags1 } from './Usertags1';
export type CarouselMediaItem = {
    id?: string;
    pk?: string;
    accessibility_caption?: string;
    is_dash_eligible?: string;
    video_dash_manifest?: string;
    media_type?: number;
    original_height?: number;
    original_width?: number;
    inventory_source?: string;
    user?: string;
    usertags?: (string | Usertags1);
    image_versions2?: ImageVersions21;
    carousel_parent_id?: string;
    sharing_friction_info?: InstagramDL__models__Feed__SharingFrictionInfo;
    preview?: string;
    organic_tracking_token?: string;
    saved_collection_ids?: string;
    has_viewer_saved?: string;
    video_versions?: string;
    media_overlay_info?: string;
    number_of_qualities?: string;
    link?: string;
    story_cta?: string;
    carousel_media?: string;
};

