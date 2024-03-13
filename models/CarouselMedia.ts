/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstagramDL__models__RawPost__ImageVersions2 } from './InstagramDL__models__RawPost__ImageVersions2';
import type { InstagramDL__models__RawPost__SharingFrictionInfo } from './InstagramDL__models__RawPost__SharingFrictionInfo';
import type { InstagramDL__models__RawPost__VideoVersion } from './InstagramDL__models__RawPost__VideoVersion';
export type CarouselMedia = {
    id?: string;
    media_type?: number;
    product_type?: string;
    image_versions2?: InstagramDL__models__RawPost__ImageVersions2;
    video_versions?: Array<InstagramDL__models__RawPost__VideoVersion>;
    original_width?: number;
    original_height?: number;
    accessibility_caption?: string;
    pk?: string;
    carousel_parent_id?: string;
    usertags?: any;
    commerciality_status?: string;
    sharing_friction_info?: InstagramDL__models__RawPost__SharingFrictionInfo;
};

