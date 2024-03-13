/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TextPostAppInfo } from './TextPostAppInfo';
import type { ThreadsDL__models__GraphQLPost__Caption } from './ThreadsDL__models__GraphQLPost__Caption';
import type { ThreadsDL__models__GraphQLPost__ImageVersions2 } from './ThreadsDL__models__GraphQLPost__ImageVersions2';
import type { ThreadsDL__models__GraphQLPost__User } from './ThreadsDL__models__GraphQLPost__User';
import type { ThreadsDL__models__GraphQLPost__VideoVersion } from './ThreadsDL__models__GraphQLPost__VideoVersion';
export type Post = {
    pk?: string;
    user?: ThreadsDL__models__GraphQLPost__User;
    text_post_app_info?: TextPostAppInfo;
    id?: string;
    is_paid_partnership?: null;
    is_fb_only?: null;
    is_internal_only?: null;
    code?: string;
    carousel_media?: null;
    image_versions2?: ThreadsDL__models__GraphQLPost__ImageVersions2;
    original_height?: number;
    original_width?: number;
    video_versions?: Array<ThreadsDL__models__GraphQLPost__VideoVersion>;
    like_count?: number;
    audio?: null;
    caption?: ThreadsDL__models__GraphQLPost__Caption;
    caption_is_edited?: boolean;
    transcription_data?: null;
    accessibility_caption?: null;
    has_audio?: null;
    media_type?: number;
    has_liked?: boolean;
    caption_add_on?: null;
    giphy_media_info?: null;
    text_with_entities?: null;
    taken_at?: number;
    organic_tracking_token?: string;
    media_overlay_info?: null;
    like_and_view_counts_disabled?: boolean;
};

