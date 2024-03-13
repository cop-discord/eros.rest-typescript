/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelResponse } from '../models/ChannelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class YouTubeService {
    /**
     * Youtube Endpoint
     * @param snowflake
     * @returns ChannelResponse Successful Response
     * @throws ApiError
     */
    public static youtubeEndpointYoutubeGet(
        snowflake: string,
    ): CancelablePromise<ChannelResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/youtube',
            query: {
                'snowflake': snowflake,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
