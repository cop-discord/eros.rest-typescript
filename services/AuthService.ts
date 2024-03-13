/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIAccount } from '../models/APIAccount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Auth Create
     * @param name
     * @param credits
     * @returns APIAccount Successful Response
     * @throws ApiError
     */
    public static authCreateAuthCreateGet(
        name: string,
        credits: number = 50,
    ): CancelablePromise<APIAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/create',
            query: {
                'name': name,
                'credits': credits,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Auth Delete
     * @param name
     * @param key
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authDeleteAuthDeleteGet(
        name?: string,
        key?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/delete',
            query: {
                'name': name,
                'key': key,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Auth Regen
     * @param name
     * @param key
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authRegenAuthRegenGet(
        name?: string,
        key?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/regen',
            query: {
                'name': name,
                'key': key,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Auth Ipreset
     * @param name
     * @param key
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authIpresetAuthIpresetGet(
        name?: string,
        key?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/ipreset',
            query: {
                'name': name,
                'key': key,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Auth Keys
     * @returns APIAccount Successful Response
     * @throws ApiError
     */
    public static authKeysAuthKeysGet(): CancelablePromise<Array<APIAccount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/keys',
        });
    }
}
