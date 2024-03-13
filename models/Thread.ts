/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThreadsDL__models__Profile__ImageVersions2 } from './ThreadsDL__models__Profile__ImageVersions2';
import type { ThreadsDL__models__Profile__VideoVersion } from './ThreadsDL__models__Profile__VideoVersion';
export type Thread = {
    text?: string;
    published_on?: number;
    id?: string;
    pk?: string;
    code?: string;
    username?: string;
    user_pic?: string;
    user_verified?: boolean;
    user_pk?: string;
    user_id?: null;
    has_audio?: null;
    reply_count?: null;
    image_versions2?: ThreadsDL__models__Profile__ImageVersions2;
    video_versions?: Array<ThreadsDL__models__Profile__VideoVersion>;
    like_count?: number;
    images?: Array<any>;
    image_count?: null;
    videos?: Array<any>;
    url?: string;
};

