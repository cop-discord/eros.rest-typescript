/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CarouselMediaItem } from './CarouselMediaItem';
import type { InstagramDL__models__Feed__Caption } from './InstagramDL__models__Feed__Caption';
import type { InstagramDL__models__Feed__ClipsMetadata } from './InstagramDL__models__Feed__ClipsMetadata';
import type { InstagramDL__models__Feed__CoauthorProducer } from './InstagramDL__models__Feed__CoauthorProducer';
import type { InstagramDL__models__Feed__ImageVersions2 } from './InstagramDL__models__Feed__ImageVersions2';
import type { InstagramDL__models__Feed__Owner } from './InstagramDL__models__Feed__Owner';
import type { InstagramDL__models__Feed__User } from './InstagramDL__models__Feed__User';
import type { InstagramDL__models__Feed__VideoVersion } from './InstagramDL__models__Feed__VideoVersion';
import type { MediaCroppingInfo } from './MediaCroppingInfo';
import type { SharingFrictionInfo1 } from './SharingFrictionInfo1';
import type { Usertags } from './Usertags';
export type InstagramDL__models__Feed__Node = {
    code?: string;
    pk?: string;
    id?: string;
    ad_id?: string;
    boosted_status?: string;
    boost_unavailable_identifier?: string;
    boost_unavailable_reason?: string;
    caption?: InstagramDL__models__Feed__Caption;
    caption_is_edited?: boolean;
    feed_demotion_control?: string;
    feed_recs_demotion_control?: string;
    taken_at?: number;
    inventory_source?: string;
    video_versions?: (string | Array<InstagramDL__models__Feed__VideoVersion>);
    is_dash_eligible?: (number | string);
    number_of_qualities?: (number | string);
    video_dash_manifest?: string;
    image_versions2?: InstagramDL__models__Feed__ImageVersions2;
    is_paid_partnership?: boolean;
    sponsor_tags?: string;
    affiliate_info?: string;
    original_height?: number;
    original_width?: number;
    organic_tracking_token?: string;
    link?: string;
    story_cta?: string;
    user?: InstagramDL__models__Feed__User;
    group?: string;
    owner?: InstagramDL__models__Feed__Owner;
    coauthor_producers?: (string | Array<InstagramDL__models__Feed__CoauthorProducer>);
    follow_hashtag_info?: string;
    title?: string;
    comment_count?: number;
    comments_disabled?: string;
    commenting_disabled_for_viewer?: string;
    like_and_view_counts_disabled?: boolean;
    has_liked?: boolean;
    top_likers?: Array<any>;
    facepile_top_likers?: any;
    like_count?: number;
    preview?: string;
    can_see_insights_as_brand?: boolean;
    social_context?: string;
    view_count?: string;
    can_reshare?: string;
    can_viewer_reshare?: boolean;
    ig_media_sharing_disabled?: boolean;
    photo_of_you?: (boolean | string);
    product_type?: string;
    media_type?: number;
    usertags?: (string | Usertags);
    media_overlay_info?: string;
    carousel_parent_id?: string;
    carousel_media_count?: (number | string);
    carousel_media?: (string | Array<CarouselMediaItem>);
    location?: string;
    has_audio?: (boolean | string);
    clips_metadata?: (string | InstagramDL__models__Feed__ClipsMetadata);
    clips_attribution_info?: string;
    accessibility_caption?: string;
    audience?: string;
    saved_collection_ids?: string;
    has_viewer_saved?: string;
    share_urls?: any;
    visibility?: string;
    expiring_at?: string;
    logging_info_token?: string;
    sharing_friction_info?: SharingFrictionInfo1;
    invited_coauthor_producers?: Array<any>;
    comments?: Array<any>;
    headline?: string;
    media_cropping_info?: (string | MediaCroppingInfo);
    thumbnails?: ;
    timeline_pinned_user_ids?: string;
    upcoming_event?: string;
    explore?: string;
    main_feed_carousel_starting_media_id?: string;
    is_seen?: string;
    __typename?: string;
};

