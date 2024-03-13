/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotedStatusResult } from './QuotedStatusResult';
import type { TwitterDL__models__Timeline__Core } from './TwitterDL__models__Timeline__Core';
import type { TwitterDL__models__Timeline__EditControl } from './TwitterDL__models__Timeline__EditControl';
import type { TwitterDL__models__Timeline__Legacy3 } from './TwitterDL__models__Timeline__Legacy3';
import type { TwitterDL__models__Timeline__QuickPromoteEligibility } from './TwitterDL__models__Timeline__QuickPromoteEligibility';
import type { TwitterDL__models__Timeline__Views } from './TwitterDL__models__Timeline__Views';
export type TwitterDL__models__Timeline__Result1 = {
    __typename?: string;
    rest_id?: string;
    core?: TwitterDL__models__Timeline__Core;
    unmention_data?: Record<string, any>;
    edit_control?: TwitterDL__models__Timeline__EditControl;
    is_translatable?: boolean;
    views?: TwitterDL__models__Timeline__Views;
    source?: string;
    quoted_status_result?: QuotedStatusResult;
    legacy?: TwitterDL__models__Timeline__Legacy3;
    quick_promote_eligibility?: TwitterDL__models__Timeline__QuickPromoteEligibility;
};

