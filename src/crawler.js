const SitemapGenerator = require('sitemap-generator')

const generator = SitemapGenerator('http://aiibe.github.io/pomoto', {
	stripQuerystring: false,
	filepath: 'dist/sitemap.xml',
	lastMod: true,
})

generator.on('done', () => {
	console.log('sitemap.xml created')
})

generator.on('error', (error) => {
	console.log(error)
})

generator.start()
