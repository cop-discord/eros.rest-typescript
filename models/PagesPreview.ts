/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Block } from './Block';
import type { PinterestDL__models__Reverse__Image } from './PinterestDL__models__Reverse__Image';
import type { Style } from './Style';
export type PagesPreview = {
    music_attributions?: Array<any>;
    style?: Style;
    type?: string;
    id?: string;
    image_adjusted?: PinterestDL__models__Reverse__Image;
    layout?: number;
    should_mute?: boolean;
    image_signature?: string;
    blocks?: Array<Block>;
    image?: PinterestDL__models__Reverse__Image;
    image_signature_adjusted?: string;
};

