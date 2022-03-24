var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/FAngelo94/SvelteFirstApp.git', // Update to point to your repository  
        user: {
            name: 'FAngelo94', // update to use your name
            email: 'a.falci@live.it' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)