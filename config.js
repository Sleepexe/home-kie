const CONFIG = {
    // General
    name: 'kie',
    openInNewTab: false,
    title: 'kie-home',

    // Clock
    twelveHourFormat: false,

    // Search
    searchEngine: 'google', // google, ddg
    barPlaceholder: 'search..',
    autoFocusBar: true,

    // Bookmarks
    firstBookmarksList: [
        {
            id: '1',
            name: 'youtube',
            link: 'https://youtube.com/',
        },
        
        {
            id: '2',
            name: 'twitch',
            link: 'https://www.twitch.tv/',
        },
        {
            id: '3',
            name: 'gmail',
            link: 'https://mail.google.com/',
        },
    ],
    secondBookmarksList: [
        {
            id: '1',
            name: 'github',
            link: 'https://github.com/',
        },
        {
            id: '2',
            name: 'stack overflow',
            link: 'https://stackoverflow.com',
        },
        {
            id: '3',
            name: 'w3',
            link: 'https://www.w3schools.com',
        },
    ]
}

export const config = CONFIG;
