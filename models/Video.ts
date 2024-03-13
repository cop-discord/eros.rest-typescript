/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Anchor } from './Anchor';
import type { TikTokDL__models__Feed__Author } from './TikTokDL__models__Feed__Author';
import type { TikTokDL__models__Feed__CommerceInfo } from './TikTokDL__models__Feed__CommerceInfo';
import type { TikTokDL__models__Feed__MusicInfo } from './TikTokDL__models__Feed__MusicInfo';
export type Video = {
    video_id?: string;
    region?: string;
    title?: string;
    cover?: string;
    duration?: number;
    play?: string;
    wmplay?: string;
    size?: number;
    wm_size?: number;
    music?: string;
    music_info?: TikTokDL__models__Feed__MusicInfo;
    play_count?: number;
    digg_count?: number;
    comment_count?: number;
    share_count?: number;
    download_count?: number;
    collect_count?: number;
    create_time?: number;
    anchors?: Array<Anchor>;
    anchors_extras?: string;
    is_ad?: boolean;
    commerce_info?: TikTokDL__models__Feed__CommerceInfo;
    commercial_video_info?: string;
    item_comment_settings?: number;
    author?: TikTokDL__models__Feed__Author;
    is_top?: number;
    id?: string;
    images?: Array<string>;
};

