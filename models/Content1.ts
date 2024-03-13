/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Footer } from './Footer';
import type { Header } from './Header';
import type { TwitterDL__models__Timeline__ClientEventInfo1 } from './TwitterDL__models__Timeline__ClientEventInfo1';
import type { TwitterDL__models__Timeline__Item } from './TwitterDL__models__Timeline__Item';
import type { TwitterDL__models__Timeline__ItemContent1 } from './TwitterDL__models__Timeline__ItemContent1';
export type Content1 = {
    entryType?: string;
    __typename?: string;
    itemContent?: TwitterDL__models__Timeline__ItemContent1;
    clientEventInfo?: TwitterDL__models__Timeline__ClientEventInfo1;
    items?: Array<TwitterDL__models__Timeline__Item>;
    displayType?: string;
    header?: Header;
    footer?: Footer;
    value?: string;
    cursorType?: string;
};

