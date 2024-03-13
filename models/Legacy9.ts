/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Entities9 } from './Entities9';
import type { ExtendedEntities2 } from './ExtendedEntities2';
export type Legacy9 = {
    bookmark_count?: number;
    bookmarked?: boolean;
    created_at?: string;
    conversation_id_str?: string;
    display_text_range?: Array<number>;
    entities?: Entities9;
    extended_entities?: ExtendedEntities2;
    favorite_count?: number;
    favorited?: boolean;
    full_text?: string;
    is_quote_status?: boolean;
    lang?: string;
    possibly_sensitive?: boolean;
    possibly_sensitive_editable?: boolean;
    quote_count?: number;
    reply_count?: number;
    retweet_count?: number;
    retweeted?: boolean;
    user_id_str?: string;
    id_str?: string;
};

