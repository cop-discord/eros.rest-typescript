/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PinterestDL__models__Post__AnalysisUa } from './PinterestDL__models__Post__AnalysisUa';
import type { PinterestDL__models__Post__User } from './PinterestDL__models__Post__User';
export type PinterestDL__models__Post__ClientContext = {
    analysis_ua?: PinterestDL__models__Post__AnalysisUa;
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
    deep_link?: string;
    enabled_advertiser_countries?: Array<string>;
    facebook_token?: any;
    full_path?: string;
    http_referrer?: string;
    impersonator_user_id?: any;
    invite_code?: string;
    invite_sender_id?: string;
    is_authenticated?: boolean;
    is_bot?: string;
    is_internal_ip?: boolean;
    is_full_page?: boolean;
    is_mobile_agent?: boolean;
    is_sterling_on_steroids?: boolean;
    is_tablet_agent?: boolean;
    language?: string;
    locale?: string;
    origin?: string;
    path?: string;
    placed_experiences?: any;
    referrer?: any;
    region_from_ip?: string;
    request_host?: string;
    request_identifier?: string;
    social_bot?: string;
    stage?: string;
    sterling_on_steroids_ldap?: any;
    sterling_on_steroids_user_type?: any;
    unauth_id?: string;
    seo_debug?: boolean;
    user_agent_can_use_native_app?: boolean;
    user_agent_platform?: string;
    user_agent_platform_version?: any;
    user_agent?: string;
    user?: PinterestDL__models__Post__User;
    utm_campaign?: any;
    visible_url?: string;
};

