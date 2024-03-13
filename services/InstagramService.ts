/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstagramStoryResponse } from '../models/InstagramStoryResponse';
import type { InstagramTimeline } from '../models/InstagramTimeline';
import type { InstagramWebProfileResponse } from '../models/InstagramWebProfileResponse';
import type { RawPost } from '../models/RawPost';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InstagramService {
    /**
     * Instagram User
     * @param username
     * @returns InstagramWebProfileResponse Successful Response
     * @throws ApiError
     */
    public static instagramUserInstagramUserGet(
        username: string,
    ): CancelablePromise<InstagramWebProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/instagram/user',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Instagram Story
     * @param username
     * @returns InstagramStoryResponse Successful Response
     * @throws ApiError
     */
    public static instagramStoryInstagramStoryGet(
        username: string,
    ): CancelablePromise<InstagramStoryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/instagram/story',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Instagram Post
     * @param url
     * @returns RawPost Successful Response
     * @throws ApiError
     */
    public static instagramPostInstagramPostGet(
        url: string,
    ): CancelablePromise<RawPost> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/instagram/post',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Instagram Feed
     * @param username
     * @returns InstagramTimeline Successful Response
     * @throws ApiError
     */
    public static instagramFeedInstagramFeedGet(
        username: string,
    ): CancelablePromise<InstagramTimeline> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/instagram/feed',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
