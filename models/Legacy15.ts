/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Entities13 } from './Entities13';
import type { ExtendedEntities3 } from './ExtendedEntities3';
import type { QuotedStatusPermalink } from './QuotedStatusPermalink';
export type Legacy15 = {
    bookmark_count?: number;
    bookmarked?: boolean;
    created_at?: string;
    conversation_id_str?: string;
    display_text_range?: Array<number>;
    entities?: Entities13;
    favorite_count?: number;
    favorited?: boolean;
    full_text?: string;
    is_quote_status?: boolean;
    lang?: string;
    quote_count?: number;
    reply_count?: number;
    retweet_count?: number;
    retweeted?: boolean;
    user_id_str?: string;
    id_str?: string;
    extended_entities?: ExtendedEntities3;
    possibly_sensitive?: boolean;
    possibly_sensitive_editable?: boolean;
    quoted_status_id_str?: string;
    quoted_status_permalink?: QuotedStatusPermalink;
};

