/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PinterestDL__models__Feed__Link } from './PinterestDL__models__Feed__Link';
import type { PinterestDL__models__Feed__SummaryDetail } from './PinterestDL__models__Feed__SummaryDetail';
import type { PinterestDL__models__Feed__TitleDetail } from './PinterestDL__models__Feed__TitleDetail';
export type PinterestDL__models__Feed__Entry = {
    title?: string;
    title_detail?: PinterestDL__models__Feed__TitleDetail;
    links?: Array<PinterestDL__models__Feed__Link>;
    link?: string;
    summary?: string;
    summary_detail?: PinterestDL__models__Feed__SummaryDetail;
    published?: string;
    published_parsed?: number;
    id?: string;
    guidislink?: boolean;
};

