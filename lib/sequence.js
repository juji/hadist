

module.exports = arr => {

  let p = Promise.resolve(0)
  arr.forEach(elm => {
    p = p.then(elm)
  })

  return p

}
