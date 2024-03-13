/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedResponse } from '../models/FeedResponse';
import type { PostResponse } from '../models/PostResponse';
import type { TikTokUser } from '../models/TikTokUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TikTokService {
    /**
     * Tiktok Endpoint
     * @param url
     * @returns PostResponse Successful Response
     * @throws ApiError
     */
    public static tiktokEndpointTiktokPostGet(
        url: string,
    ): CancelablePromise<PostResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tiktok/post',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Tiktok User
     * @param username
     * @returns TikTokUser Successful Response
     * @throws ApiError
     */
    public static tiktokUserTiktokUserGet(
        username: string,
    ): CancelablePromise<TikTokUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tiktok/user',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Tiktok Feed
     * @param username
     * @returns FeedResponse Successful Response
     * @throws ApiError
     */
    public static tiktokFeedTiktokFeedGet(
        username: string,
    ): CancelablePromise<FeedResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tiktok/feed',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
