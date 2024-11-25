window.$docsify = {
    name: 'Instrumentum',
    repo: 'https://github.com/Ethereal-Creators/ethereal-creators-projet',
    auto2top: true,
    themeColor: '#3F51B5',
    topMargin: 90,
    loadSidebar: false,
    autoHeader: true,
    nativeEmoji: true,
    executeScript: true,
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
    plugins: [
        function (hook, vm) {
            hook.doneEach(() => {
                // Lightbox plugin for images
                import('https://gllmar.github.io/docsify-lightbox/docsify-lightbox.js').then(
                    module => {
                        const images = document.querySelectorAll('img');
                        const lightbox = new module.default();
                        lightbox.initialize(images);
                    }).catch(err => console.error('Failed to load Lightbox plugin', err));
            });
        },

       
    ],
};