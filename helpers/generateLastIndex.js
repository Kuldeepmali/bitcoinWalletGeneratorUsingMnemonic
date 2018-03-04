async function run (derivationPath) {
  const indexArray = derivationPath.split('/')
  return indexArray[indexArray.length - 1]
}

module.exports = run
