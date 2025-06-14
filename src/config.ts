export const SITE = {
  website: 'https://nazargladish.com/', // replace this with your deployed domain
  author: 'Nazar Gladish',
  profile: 'https://nazargladish.com/',
  desc: "Nazar Gladish's personal website.",
  title: 'Nazar Gladish',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: false,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
  },
  dynamicOgImage: true,
  lang: 'en', // html lang code. Set this empty and default will be "en"
  timezone: 'America/New_York', // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const
