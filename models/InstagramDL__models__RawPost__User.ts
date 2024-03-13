/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstagramDL__models__RawPost__FriendshipStatus } from './InstagramDL__models__RawPost__FriendshipStatus';
import type { InstagramDL__models__RawPost__HdProfilePicUrlInfo } from './InstagramDL__models__RawPost__HdProfilePicUrlInfo';
export type InstagramDL__models__RawPost__User = {
    pk?: string;
    username?: string;
    profile_pic_url?: string;
    is_private?: boolean;
    is_embeds_disabled?: any;
    is_unpublished?: boolean;
    is_verified?: boolean;
    friendship_status?: InstagramDL__models__RawPost__FriendshipStatus;
    latest_reel_media?: number;
    id?: string;
    supervision_info?: any;
    live_broadcast_visibility?: any;
    live_broadcast_id?: any;
    hd_profile_pic_url_info?: InstagramDL__models__RawPost__HdProfilePicUrlInfo;
};

