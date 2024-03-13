/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HighlightsInfo } from './HighlightsInfo';
import type { TwitterDL__models__User__AffiliatesHighlightedLabel } from './TwitterDL__models__User__AffiliatesHighlightedLabel';
import type { TwitterDL__models__User__Legacy } from './TwitterDL__models__User__Legacy';
import type { TwitterDL__models__User__Professional } from './TwitterDL__models__User__Professional';
import type { VerificationInfo } from './VerificationInfo';
export type TwitterDL__models__User__Result = {
    __typename?: string;
    id?: string;
    rest_id?: string;
    affiliates_highlighted_label?: TwitterDL__models__User__AffiliatesHighlightedLabel;
    has_graduated_access?: boolean;
    is_blue_verified?: boolean;
    profile_image_shape?: string;
    legacy?: TwitterDL__models__User__Legacy;
    professional?: TwitterDL__models__User__Professional;
    super_follow_eligible?: boolean;
    smart_blocked_by?: boolean;
    smart_blocking?: boolean;
    legacy_extended_profile?: Record<string, any>;
    is_profile_translatable?: boolean;
    has_hidden_likes_on_profile?: boolean;
    has_hidden_subscriptions_on_profile?: boolean;
    verification_info?: VerificationInfo;
    highlights_info?: HighlightsInfo;
    user_seed_tweet_count?: number;
    business_account?: Record<string, any>;
    creator_subscriptions_count?: number;
};

