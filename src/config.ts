import type { PostHideElements } from '~/content/config';

export const Site = 'https://ZeroDread.dev/';
export const SiteLanguage = 'en';
export const SiteTitle = 'ZeroDread';
export const SiteDescription = "Shreyash's Personal Site";
export const FooterDescription = '獨行道';
export const AdminName = 'ZeroDread';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:Shreyash@ZeroDread.dev' },
	github: { url: 'https://github.com/ZeroDread/Site' },
	x: { url: 'https://x.com/Z3r0Dr34d' },
	mastodon: { url: 'https://mastodon.social/@ZeroDread' },
	instagram: { url: 'https://instagram.com/Z3r0Dr34d' },
	threads: { url: 'https://www.threads.net/@ZeroDread' },
	telegram: { url: 'https://t.me/@Z3r0Dr34d' },
	youtube: { url: 'https://youtube.com/@Z3r0Dr34d' },
	slack: { url: 'https://slack.com/ZeroDread' },
	twitch: { url: 'https://twitch.com/Z3r0Dr34d' },
	reddit: { url: 'https://reddit.com/u/Z3r0Dr34d' },
	paypal: { url: 'https://www.paypal.me/ShreyashGavali' },
	steam: { url: 'https://steamcommunity.com/id/Z3r0Dr34d' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'ZeroDread/Site',
	'data-repo-id': 'R_kgDOMtb-4g',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOMtb-4s4CiPFh',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'en',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
