/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIAccount } from '../models/APIAccount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentGatewayService {
    /**
     * Payment
     * @param name
     * @returns APIAccount Successful Response
     * @throws ApiError
     */
    public static paymentPaymentNameGet(
        name: string,
    ): CancelablePromise<APIAccount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payment/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Pay
     * Pay for API Access
     * @param type
     * @returns any Successful Response
     * @throws ApiError
     */
    public static payPayGet(
        type: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pay',
            query: {
                'type': type,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Buy
     * Pay for Access to the API
     * @returns any Successful Response
     * @throws ApiError
     */
    public static buyBuyGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/buy',
        });
    }
    /**
     * Topup
     * top up your balance
     * @returns any Successful Response
     * @throws ApiError
     */
    public static topupTopupGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/topup',
        });
    }
}
