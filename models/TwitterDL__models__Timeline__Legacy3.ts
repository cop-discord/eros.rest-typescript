/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotedStatusPermalink } from './QuotedStatusPermalink';
import type { TwitterDL__models__Timeline__Entities3 } from './TwitterDL__models__Timeline__Entities3';
export type TwitterDL__models__Timeline__Legacy3 = {
    bookmark_count?: number;
    bookmarked?: boolean;
    created_at?: string;
    conversation_id_str?: string;
    display_text_range?: Array<number>;
    entities?: TwitterDL__models__Timeline__Entities3;
    favorite_count?: number;
    favorited?: boolean;
    full_text?: string;
    is_quote_status?: boolean;
    lang?: string;
    quote_count?: number;
    quoted_status_id_str?: string;
    quoted_status_permalink?: QuotedStatusPermalink;
    reply_count?: number;
    retweet_count?: number;
    retweeted?: boolean;
    user_id_str?: string;
    id_str?: string;
};

