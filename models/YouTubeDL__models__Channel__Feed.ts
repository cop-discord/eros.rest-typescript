/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorDetail } from './AuthorDetail';
import type { YouTubeDL__models__Channel__Author } from './YouTubeDL__models__Channel__Author';
import type { YouTubeDL__models__Channel__Link } from './YouTubeDL__models__Channel__Link';
import type { YouTubeDL__models__Channel__TitleDetail } from './YouTubeDL__models__Channel__TitleDetail';
export type YouTubeDL__models__Channel__Feed = {
    links?: Array<YouTubeDL__models__Channel__Link>;
    id?: string;
    guidislink?: boolean;
    link?: string;
    yt_channelid?: string;
    title?: string;
    title_detail?: YouTubeDL__models__Channel__TitleDetail;
    authors?: Array<YouTubeDL__models__Channel__Author>;
    author_detail?: AuthorDetail;
    href?: string;
    author?: string;
    published?: string;
    published_parsed?: Array<number>;
};

