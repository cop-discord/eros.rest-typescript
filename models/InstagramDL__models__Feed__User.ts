/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstagramDL__models__Feed__FriendshipStatus } from './InstagramDL__models__Feed__FriendshipStatus';
import type { InstagramDL__models__Feed__HdProfilePicUrlInfo } from './InstagramDL__models__Feed__HdProfilePicUrlInfo';
export type InstagramDL__models__Feed__User = {
    pk?: string;
    username?: string;
    profile_pic_url?: string;
    is_private?: boolean;
    is_embeds_disabled?: string;
    is_unpublished?: boolean;
    is_verified?: boolean;
    friendship_status?: InstagramDL__models__Feed__FriendshipStatus;
    latest_besties_reel_media?: number;
    latest_reel_media?: number;
    live_broadcast_visibility?: string;
    live_broadcast_id?: string;
    seen?: string;
    supervision_info?: string;
    id?: string;
    hd_profile_pic_url_info?: InstagramDL__models__Feed__HdProfilePicUrlInfo;
    __typename?: string;
};

