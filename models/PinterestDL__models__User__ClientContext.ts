/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PinterestDL__models__User__AnalysisUa } from './PinterestDL__models__User__AnalysisUa';
import type { PinterestDL__models__User__User } from './PinterestDL__models__User__User';
export type PinterestDL__models__User__ClientContext = {
    analysis_ua?: PinterestDL__models__User__AnalysisUa;
    app_type_detailed?: number;
    app_version?: string;
    batch_exp?: boolean;
    browser_locale?: string;
    browser_name?: string;
    browser_type?: number;
    browser_version?: string;
    country?: string;
    country_from_hostname?: string;
    country_from_ip?: string;
    csp_nonce?: string;
    current_url?: string;
    debug?: boolean;
    enabled_advertiser_countries?: Array<string>;
    facebook_token?: null;
    full_path?: string;
    http_referrer?: string;
    impersonator_user_id?: null;
    invite_code?: string;
    invite_sender_id?: string;
    is_authenticated?: boolean;
    is_bot?: string;
    is_internal_ip?: boolean;
    is_full_page?: boolean;
    is_managed_advertiser?: boolean;
    is_mobile_agent?: boolean;
    is_shop_the_pin_campaign_whitelisted?: boolean;
    is_sterling_on_steroids?: boolean;
    is_tablet_agent?: boolean;
    language?: string;
    locale?: string;
    origin?: string;
    path?: string;
    placed_experiences?: null;
    referrer?: null;
    region_from_ip?: string;
    request_host?: string;
    request_identifier?: string;
    social_bot?: string;
    stage?: string;
    sterling_on_steroids_ldap?: null;
    sterling_on_steroids_user_type?: null;
    unauth_id?: string;
    seo_debug?: boolean;
    user_agent_can_use_native_app?: boolean;
    user_agent_platform?: string;
    user_agent_platform_version?: Array<number>;
    user_agent?: string;
    user?: PinterestDL__models__User__User;
    utm_campaign?: null;
    visible_url?: string;
};

