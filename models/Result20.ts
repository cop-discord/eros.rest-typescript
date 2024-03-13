/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Core4 } from './Core4';
import type { Legacy15 } from './Legacy15';
import type { NoteTweet1 } from './NoteTweet1';
import type { QuotedRefResult } from './QuotedRefResult';
import type { TwitterDL__models__Timeline__EditControl } from './TwitterDL__models__Timeline__EditControl';
import type { TwitterDL__models__Timeline__Views } from './TwitterDL__models__Timeline__Views';
export type Result20 = {
    __typename?: string;
    rest_id?: string;
    core?: Core4;
    unmention_data?: Record<string, any>;
    edit_control?: TwitterDL__models__Timeline__EditControl;
    is_translatable?: boolean;
    views?: TwitterDL__models__Timeline__Views;
    source?: string;
    legacy?: Legacy15;
    note_tweet?: NoteTweet1;
    quotedRefResult?: QuotedRefResult;
};

