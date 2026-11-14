module.exports = {
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi', 'en'],
    },
    localePath: './public/locales',
    // Re-read locale JSON on each request in dev so copy edits show without a server restart.
    reloadOnPrerender: process.env.NODE_ENV === 'development',
} 