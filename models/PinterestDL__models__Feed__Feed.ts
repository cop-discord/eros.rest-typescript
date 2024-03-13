/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PinterestDL__models__Feed__Link } from './PinterestDL__models__Feed__Link';
import type { PinterestDL__models__Feed__TitleDetail } from './PinterestDL__models__Feed__TitleDetail';
import type { SubtitleDetail } from './SubtitleDetail';
export type PinterestDL__models__Feed__Feed = {
    title?: string;
    title_detail?: PinterestDL__models__Feed__TitleDetail;
    links?: Array<PinterestDL__models__Feed__Link>;
    link?: string;
    subtitle?: string;
    subtitle_detail?: SubtitleDetail;
    language?: string;
    updated?: string;
    updated_parsed?: number;
};

