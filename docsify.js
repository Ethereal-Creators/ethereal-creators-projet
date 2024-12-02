window.$docsify = {
    name: 'Instrumentum',
    repo: 'https://github.com/Ethereal-Creators/ethereal-creators-projet',
    auto2top: true,
    themeColor: '#3F51B5',
    loadSidebar: false,
    autoHeader: true,
    nativeEmoji: true,
    fallbackLanguages: ['fr', 'en'],
    maxLevel: 3,
    subMaxLevel: 3,
    themeable: {
        readyTransition: true, // default
        responsiveTables: true // default
    },
    search: {
        maxAge: 86400000, // Cache search results for 1 day
        placeholder: 'Search...',
        noData: 'No results found',
    },
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://your-cdn.com/custom-style.css'
        }]
    ],
    theme: 'dark', // Enable dark mode
};