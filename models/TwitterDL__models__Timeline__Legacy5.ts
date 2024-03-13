/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotedStatusPermalink } from './QuotedStatusPermalink';
import type { RetweetedStatusResult } from './RetweetedStatusResult';
import type { Scopes } from './Scopes';
import type { TwitterDL__models__Timeline__Entities5 } from './TwitterDL__models__Timeline__Entities5';
import type { TwitterDL__models__Timeline__ExtendedEntities1 } from './TwitterDL__models__Timeline__ExtendedEntities1';
export type TwitterDL__models__Timeline__Legacy5 = {
    bookmark_count?: number;
    bookmarked?: boolean;
    created_at?: string;
    conversation_id_str?: string;
    display_text_range?: Array<number>;
    entities?: TwitterDL__models__Timeline__Entities5;
    extended_entities?: TwitterDL__models__Timeline__ExtendedEntities1;
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
    retweeted_status_result?: RetweetedStatusResult;
    scopes?: Scopes;
    quoted_status_id_str?: string;
    quoted_status_permalink?: QuotedStatusPermalink;
};

