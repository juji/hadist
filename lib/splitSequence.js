
const sequence = require('./sequence')

module.exports = async (arr, num = 100) => {

  const copy = [ ...arr ]
  const parts = Math.ceil(arr.length / num)
  const numarr = [ ...new Array(parts).keys() ]

  return await sequence(
    numarr.map(part => () => Promise.all(
      arr.slice(part*num, (part*num)+num).map(v => v())
    ))
  )

}
