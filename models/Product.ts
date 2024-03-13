/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Offer } from './Offer';
import type { OfferSummary } from './OfferSummary';
export type Product = {
    offer_summary?: OfferSummary;
    variant_set?: any;
    videos?: Array<any>;
    name?: string;
    type?: string;
    shipping_info?: Record<string, any>;
    additional_images?: any;
    id?: string;
    additional_images_per_spec?: any;
    purchase_url?: any;
    has_multi_images?: boolean;
    offers?: Array<Offer>;
    label_info?: Record<string, any>;
    price_history_summary?: Record<string, any>;
};

