/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Card1 } from './Card1';
import type { Core2 } from './Core2';
import type { QuotedStatusResult1 } from './QuotedStatusResult1';
import type { TwitterDL__models__Timeline__EditControl } from './TwitterDL__models__Timeline__EditControl';
import type { TwitterDL__models__Timeline__Legacy5 } from './TwitterDL__models__Timeline__Legacy5';
import type { TwitterDL__models__Timeline__QuickPromoteEligibility } from './TwitterDL__models__Timeline__QuickPromoteEligibility';
import type { TwitterDL__models__Timeline__Views } from './TwitterDL__models__Timeline__Views';
export type TwitterDL__models__Timeline__Result7 = {
    __typename?: string;
    rest_id?: string;
    core?: Core2;
    unmention_data?: Record<string, any>;
    edit_control?: TwitterDL__models__Timeline__EditControl;
    is_translatable?: boolean;
    views?: TwitterDL__models__Timeline__Views;
    source?: string;
    legacy?: TwitterDL__models__Timeline__Legacy5;
    quick_promote_eligibility?: TwitterDL__models__Timeline__QuickPromoteEligibility;
    card?: Card1;
    quoted_status_result?: QuotedStatusResult1;
};

