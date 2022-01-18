require('./init')

const fs = require('fs/promises')
const path = require('path')
const { headerCase } = require("header-case");

const MAXROW = 5000
const domain = `https://${process.env.APP_DOMAIN}`
const dataDir = process.env.DATA_DIR
const lastm = new Date().toISOString().split('T')[0]

const sourceDir = path.resolve(
  __dirname,
  '..', `${dataDir}/books`
)

const sitemapParent = path.resolve(
  __dirname,
  '../frontend/public'
)

const sitemapIndex = (pages) => {

  const sitemaps = [...Array(pages).keys()].map(v => `
  <sitemap>
    <loc>${domain}/sitemap-${v}.xml</loc>
  </sitemap>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}
</sitemapindex>`

}

const sitemapContent = arr => {
  const sitemaps = arr.map(v => `
    <url>
      <loc>${v.url}</loc>
      <priority>${v.priority||'0.9'}</priority>
      <lastmod>${lastm}</lastmod>
      <changefreq>${v.changefreq}</changefreq>
    </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}
</urlset>`
}

;(async () => {



  // load data
  const books = await fs.readdir(sourceDir)

  const contents = books.reduce((a,b) => {

    const slug = b.split('.json')[0]

    return [
      ...a,
      {
        url: `${domain}/imam/${slug}`,
        priority: '0.9',
        changefreq: 'monthly'
      },
      ...(require(
        path.resolve(sourceDir, b)
      )).map(v => ({
        url: `${domain}/imam/${slug}/${v.number}`,
        priority: '0.9',
        changefreq: 'monthly'
      }))
    ]

  },[{
    url: `${domain}`,
    priority: '1',
    changefreq: 'monthly'
  }])


  // calculate sitemap page
  const pages = Math.ceil(contents.length/MAXROW)

  // create index
  await fs.writeFile(
    path.resolve(sitemapParent, 'sitemap.xml'),
    sitemapIndex(pages)
  )

  // create individual sitemap
  await Promise.all([...(new Array(pages).keys())].map(async idx => {

    const arr = contents.slice( idx*MAXROW, (idx*MAXROW)+MAXROW )
    console.log(
      'sitemap', idx,
      'start', idx*MAXROW,
      'end', (idx*MAXROW)+MAXROW,
      arr.length, 'entries'
    )

    await fs.writeFile(
      path.resolve(sitemapParent, `sitemap-${idx}.xml`),
      sitemapContent(arr)
    )

  }))




  console.log('DONE')



})().catch(e => {

  console.log(e)

})
