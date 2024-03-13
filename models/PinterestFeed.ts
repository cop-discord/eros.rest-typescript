/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Namespaces } from './Namespaces';
import type { PinterestDL__models__Feed__Entry } from './PinterestDL__models__Feed__Entry';
import type { PinterestDL__models__Feed__Feed } from './PinterestDL__models__Feed__Feed';
export type PinterestFeed = {
    bozo?: boolean;
    entries?: Array<PinterestDL__models__Feed__Entry>;
    feed?: PinterestDL__models__Feed__Feed;
    headers?: Record<string, any>;
    encoding?: string;
    version?: string;
    namespaces?: Namespaces;
};

