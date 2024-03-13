/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdMetadataContainer } from './AdMetadataContainer';
import type { AdvertiserResults } from './AdvertiserResults';
import type { ClickTrackingInfo } from './ClickTrackingInfo';
import type { ExperimentValue } from './ExperimentValue';
export type PromotedMetadata = {
    advertiser_results?: AdvertiserResults;
    adMetadataContainer?: AdMetadataContainer;
    disclosureType?: string;
    experimentValues?: Array<ExperimentValue>;
    impressionId?: string;
    impressionString?: string;
    clickTrackingInfo?: ClickTrackingInfo;
};

