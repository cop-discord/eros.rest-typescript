/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorDetail } from './AuthorDetail';
import type { MediaContentItem } from './MediaContentItem';
import type { MediaStarrating } from './MediaStarrating';
import type { MediaStatistics } from './MediaStatistics';
import type { MediaThumbnailItem } from './MediaThumbnailItem';
import type { YouTubeDL__models__Channel__Author } from './YouTubeDL__models__Channel__Author';
import type { YouTubeDL__models__Channel__Link } from './YouTubeDL__models__Channel__Link';
import type { YouTubeDL__models__Channel__SummaryDetail } from './YouTubeDL__models__Channel__SummaryDetail';
import type { YouTubeDL__models__Channel__TitleDetail } from './YouTubeDL__models__Channel__TitleDetail';
export type YouTubeDL__models__Channel__Entry = {
    id?: string;
    guidislink?: boolean;
    link?: string;
    yt_videoid?: string;
    yt_channelid?: string;
    title?: string;
    title_detail?: YouTubeDL__models__Channel__TitleDetail;
    links?: Array<YouTubeDL__models__Channel__Link>;
    authors?: Array<YouTubeDL__models__Channel__Author>;
    author_detail?: AuthorDetail;
    href?: string;
    author?: string;
    published?: string;
    published_parsed?: Array<number>;
    updated?: string;
    updated_parsed?: number;
    media_content?: Array<MediaContentItem>;
    media_thumbnail?: Array<MediaThumbnailItem>;
    summary?: string;
    summary_detail?: YouTubeDL__models__Channel__SummaryDetail;
    media_starrating?: MediaStarrating;
    media_statistics?: MediaStatistics;
    media_community?: string;
    published_parshed?: number;
};

