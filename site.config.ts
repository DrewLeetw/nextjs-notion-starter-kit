import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'f1f18b720f19446db311c7ce17ec9952',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Steam Deck FAQ 中文網頁',
  domain: 'https://imminent-building-296.notion.site/Steam-Deck-FAQ-f1f18b720f19446db311c7ce17ec9952',
  author: 'Drew Lee',

  // open graph metadata (optional)
  description: 'Steam Deck FAQ，討論Steam Deck相關的一切事務，並放置資料用',

  // social usernames (optional)
  twitter: 'SteamDeckFAQ',
  github: '',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'Under SteamOS',
  //     pageId: 'ced7a732f5974a629ac585c5df7f32be'
  //   },
  //   {
  //     title: 'Under Windows',
  //     pageId: '245dab29b247477ab84f011d4745d5b9'
  //   }
  // ]
})
