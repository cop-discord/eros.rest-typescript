/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClipsMusicAttributionInfo } from './ClipsMusicAttributionInfo';
import type { DashInfo } from './DashInfo';
import type { Dimensions } from './Dimensions';
import type { EdgeLikedBy } from './EdgeLikedBy';
import type { EdgeMediaPreviewLike } from './EdgeMediaPreviewLike';
import type { EdgeMediaToCaption1 } from './EdgeMediaToCaption1';
import type { EdgeMediaToComment } from './EdgeMediaToComment';
import type { EdgeMediaToTaggedUser1 } from './EdgeMediaToTaggedUser1';
import type { EdgeSidecarToChildren } from './EdgeSidecarToChildren';
import type { InstagramDL__models__User__CoauthorProducer } from './InstagramDL__models__User__CoauthorProducer';
import type { InstagramDL__models__User__Owner } from './InstagramDL__models__User__Owner';
import type { InstagramDL__models__User__SharingFrictionInfo } from './InstagramDL__models__User__SharingFrictionInfo';
import type { ThumbnailResource } from './ThumbnailResource';
export type Node3 = {
    __typename?: string;
    id?: string;
    shortcode?: string;
    dimensions?: Dimensions;
    display_url?: string;
    edge_media_to_tagged_user?: EdgeMediaToTaggedUser1;
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
    dash_info?: DashInfo;
    has_audio?: boolean;
    tracking_token?: string;
    video_url?: string;
    video_view_count?: number;
    edge_media_to_caption?: EdgeMediaToCaption1;
    edge_media_to_comment?: EdgeMediaToComment;
    comments_disabled?: boolean;
    taken_at_timestamp?: number;
    edge_liked_by?: EdgeLikedBy;
    edge_media_preview_like?: EdgeMediaPreviewLike;
    location?: null;
    nft_asset_info?: null;
    thumbnail_src?: string;
    thumbnail_resources?: Array<ThumbnailResource>;
    felix_profile_grid_crop?: null;
    coauthor_producers?: Array<InstagramDL__models__User__CoauthorProducer>;
    pinned_for_users?: Array<any>;
    viewer_can_reshare?: boolean;
    product_type?: string;
    clips_music_attribution_info?: ClipsMusicAttributionInfo;
    edge_sidecar_to_children?: EdgeSidecarToChildren;
};

