/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TikTokDL__models__Post__Author } from './TikTokDL__models__Post__Author';
import type { TikTokDL__models__Post__CommerceInfo } from './TikTokDL__models__Post__CommerceInfo';
import type { TikTokDL__models__Post__MusicInfo } from './TikTokDL__models__Post__MusicInfo';
export type TikTokDL__models__Post__Data = {
    id?: string;
    region?: string;
    title?: string;
    cover?: string;
    duration?: number;
    play?: string;
    wmplay?: string;
    hdplay?: string;
    size?: null;
    wm_size?: null;
    hd_size?: null;
    music?: string;
    music_info?: TikTokDL__models__Post__MusicInfo;
    play_count?: number;
    digg_count?: number;
    comment_count?: number;
    share_count?: number;
    download_count?: number;
    collect_count?: number;
    create_time?: number;
    anchors?: null;
    anchors_extras?: string;
    is_ad?: boolean;
    commerce_info?: TikTokDL__models__Post__CommerceInfo;
    commercial_video_info?: string;
    item_comment_settings?: number;
    author?: TikTokDL__models__Post__Author;
    images?: Array<string>;
};

