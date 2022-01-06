

require('./init')
const fs = require('fs/promises')
const path = require('path')
const { headerCase } = require("header-case");
const splitSequence = require('lib/splitSequence')
const dot = require('dot')

const dataDir = process.env.DATA_DIR

const sourceDir = path.resolve(
  __dirname,
  '..', `${dataDir}/books`
)

;(async () => {

  // load template
  const template = dot.template(await fs.readFile(
    path.resolve(__dirname, '../frontend/out/template/index.html'),
    { encoding: 'utf8' }
  ))

  // load data
  const books = await fs.readdir(sourceDir)


  const contents = books.reduce((a,b) => {

    return [
      ...a,
      ...(require(
        path.resolve(sourceDir, b)
      )).map(v => ({
        ...v,
        source: headerCase(b.split('.json')[0]).split('-').join(' '),
        sourceSlug: b.split('.json')[0]
      }))
    ]

  },[])


  // writing files
  await splitSequence(contents.map(v => async () => {

    const { sourceSlug, ...data } = v

    console.log(`${sourceSlug}/${data.number}`)

    await fs.mkdir(
      path.resolve(__dirname, '../frontend/out', sourceSlug, data.number),
      { recursive: true }
    )

    await fs.writeFile(
      path.resolve(__dirname, '../frontend/out', sourceSlug, `${data.number}/index.html`),
      template(data)
    )

    // delay
    return new Promise(r => setTimeout(r,100))

  }))


  console.log('DONE')



})().catch(e => {

  console.log(e)

})
