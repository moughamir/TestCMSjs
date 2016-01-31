$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: 'img/logo.svg',

    // Tagline for your site
    siteTagline: 'Tada',

    // Email address
    siteEmail: 'moughamir@gmail.com',

    // Name
    siteAuthor: 'Mohamed Moughamir',

    // Navigation items
    siteNavItems: [
      { name: 'Github', href: 'https://github.com/moughamir', newWindow: false},
      { name: 'About'}
    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
    pagesFolder: 'pages',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

    // Page as Frontpage (static)
    pageAsFrontpage: '',

    // Posts/Blog on different URL
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 300,

    // Site footer text
    footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Github',

    // If Github mode is set, your Github username and repo name. Defaults
    // to Github pages branch (gh-pages)
    githubUserSettings: {
      username: 'moughamir',
      repo: 'TestCMSjs'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
