/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationsWithLinks } from './AnnotationsWithLinks';
import type { CanonicalPin } from './CanonicalPin';
import type { SeoBreadcrumb } from './SeoBreadcrumb';
import type { SeoRelatedInterest } from './SeoRelatedInterest';
export type PinJoin = {
    shopping_klp_urls?: any;
    visual_annotation?: Array<string>;
    annotations_with_links?: AnnotationsWithLinks;
    seo_related_interests?: Array<SeoRelatedInterest>;
    canonical_pin?: CanonicalPin;
    seo_canonical_domain?: string;
    seo_breadcrumbs?: Array<SeoBreadcrumb>;
    seo_canonical_url?: string;
};

