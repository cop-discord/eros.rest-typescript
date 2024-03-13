/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ThreadsDL__models__GraphQLPost__Edge } from '../models/ThreadsDL__models__GraphQLPost__Edge';
import type { ThreadsProfileResponse } from '../models/ThreadsProfileResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ThreadsService {
    /**
     * Thread User Lookup
     * @param username
     * @returns ThreadsProfileResponse Successful Response
     * @throws ApiError
     */
    public static threadUserLookupThreadsUserGet(
        username: string,
    ): CancelablePromise<ThreadsProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/user',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Threads Post
     * @param url
     * @returns ThreadsDL__models__GraphQLPost__Edge Successful Response
     * @throws ApiError
     */
    public static threadsPostThreadsPostGet(
        url: string,
    ): CancelablePromise<Array<ThreadsDL__models__GraphQLPost__Edge>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/threads/post',
            query: {
                'url': url,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
