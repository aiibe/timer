const SitemapGenerator = require('sitemap-generator')

const generator = SitemapGenerator('http://aiibe.github.io/timer', {
	stripQuerystring: false,
	filepath: 'dist/sitemap.xml',
	lastMod: true,
})

generator.on('done', () => {
	console.log('sitemap.xml created')
})

generator.start()
