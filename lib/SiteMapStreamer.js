
const { Transform } = require('stream');


class SitemapStreamer extends Transform {

  constructor( host, changefreq = 'monthly' ) {
    super({ writableObjectMode: true });

    this.host = host
    this.changefreq = changefreq

    this.push(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  }

  _transform(chunk, encoding, callback) {
    // ...

    this.push(`
  <url>
    <loc>${this.host}${chunk.uri}</loc>
    <priority>${chunk.priority||'0.9'}</priority>
    <lastmod>${chunk.lastmod}</lastmod>
    <changefreq>${this.changefreq}</changefreq>
  </url>`)

    callback()
  }

  _flush(callback){
    this.push(`
</urlset>`)
    callback()
  }

}

module.exports = SitemapStreamer
