async function run (derivationPath) {
  const indexArray = derivationPath.split('/')
  indexArray.splice(-1, 1)
  return indexArray.join('/')
}

module.exports = run
