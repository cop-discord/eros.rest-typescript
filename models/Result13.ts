/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Card } from './Card';
import type { Core3 } from './Core3';
import type { Legacy9 } from './Legacy9';
import type { NoteTweet } from './NoteTweet';
import type { TwitterDL__models__Timeline__EditControl } from './TwitterDL__models__Timeline__EditControl';
import type { TwitterDL__models__Timeline__Views } from './TwitterDL__models__Timeline__Views';
export type Result13 = {
    __typename?: string;
    rest_id?: string;
    core?: Core3;
    unmention_data?: Record<string, any>;
    edit_control?: TwitterDL__models__Timeline__EditControl;
    is_translatable?: boolean;
    views?: TwitterDL__models__Timeline__Views;
    source?: string;
    legacy?: Legacy9;
    card?: Card;
    note_tweet?: NoteTweet;
};

