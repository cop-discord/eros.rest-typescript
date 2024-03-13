/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TwitterDL__models__Post__Core } from './TwitterDL__models__Post__Core';
import type { TwitterDL__models__Post__EditControl } from './TwitterDL__models__Post__EditControl';
import type { TwitterDL__models__Post__Legacy1 } from './TwitterDL__models__Post__Legacy1';
import type { TwitterDL__models__Post__QuickPromoteEligibility } from './TwitterDL__models__Post__QuickPromoteEligibility';
import type { TwitterDL__models__Post__Views } from './TwitterDL__models__Post__Views';
export type TwitterDL__models__Post__Result = {
    __typename?: string;
    rest_id?: string;
    has_birdwatch_notes?: boolean;
    core?: TwitterDL__models__Post__Core;
    unmention_data?: Record<string, any>;
    edit_control?: TwitterDL__models__Post__EditControl;
    is_translatable?: boolean;
    views?: TwitterDL__models__Post__Views;
    source?: string;
    legacy?: TwitterDL__models__Post__Legacy1;
    quick_promote_eligibility?: TwitterDL__models__Post__QuickPromoteEligibility;
};

