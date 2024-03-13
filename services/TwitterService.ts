/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterPost } from '../models/TwitterPost';
import type { TwitterTimeline } from '../models/TwitterTimeline';
import type { TwitterUser } from '../models/TwitterUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TwitterService {
    /**
     * Twitter User
     * @param username
     * @returns TwitterUser Successful Response
     * @throws ApiError
     */
    public static twitterUserTwitterUserGet(
        username: string,
    ): CancelablePromise<TwitterUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/twitter/user',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Twitter Post
     * @param url
     * @returns TwitterPost Successful Response
     * @throws ApiError
     */
    public static twitterPostTwitterPostGet(
        url: string,
    ): CancelablePromise<TwitterPost> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/twitter/post',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Twitter Feed
     * @param username
     * @returns TwitterTimeline Successful Response
     * @throws ApiError
     */
    public static twitterFeedTwitterFeedGet(
        username: string,
    ): CancelablePromise<TwitterTimeline> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/twitter/feed',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
