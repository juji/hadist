

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

const output = path.resolve(
  __dirname,
  '..', `frontend/lib/data.json`
)

;(async () => {


  // load data
  const books = await fs.readdir(sourceDir)
  const data = books.reduce((a,b) => {

    const length = require(
      path.resolve(sourceDir, b)
    ).length

    const source = headerCase(b.split('.json')[0]).split('-').join(' ')
    const slug = b.split('.json')[0]

    return {
      ...a,
      [slug]: {
        source, length
      }
    }

  },{})

  // writing data
  await fs.writeFile(
    output,
    JSON.stringify( data, null, 2 )
  )

  console.log('DONE')



})().catch(e => {

  console.log(e)

})
