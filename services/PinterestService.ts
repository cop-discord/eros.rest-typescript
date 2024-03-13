/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PinterestFeed } from '../models/PinterestFeed';
import type { PinterestPost } from '../models/PinterestPost';
import type { PinterestReverseResult } from '../models/PinterestReverseResult';
import type { PinterestUser } from '../models/PinterestUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PinterestService {
    /**
     * Pinterest Post
     * @param url
     * @returns PinterestPost Successful Response
     * @throws ApiError
     */
    public static pinterestPostPinterestPostGet(
        url: string,
    ): CancelablePromise<PinterestPost> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pinterest/post',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Pinterest Feed
     * @param username
     * @returns PinterestFeed Successful Response
     * @throws ApiError
     */
    public static pinterestFeedPinterestFeedGet(
        username: string,
    ): CancelablePromise<PinterestFeed> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pinterest/feed',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Pinterest User
     * @param username
     * @returns PinterestUser Successful Response
     * @throws ApiError
     */
    public static pinterestUserPinterestUserGet(
        username: string,
    ): CancelablePromise<PinterestUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pinterest/user',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Pinterest Reverse
     * @param url
     * @returns PinterestReverseResult Successful Response
     * @throws ApiError
     */
    public static pinterestReversePinterestReverseGet(
        url: string,
    ): CancelablePromise<PinterestReverseResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pinterest/reverse',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
