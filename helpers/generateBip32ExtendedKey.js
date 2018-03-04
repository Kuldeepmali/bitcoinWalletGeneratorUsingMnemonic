async function run (bip32RootKey, path) {
  let extendedKey = bip32RootKey
  const pathBits = path.split('/')

  let i = 0
  for (i = 0; i < pathBits.length; i += 1) {
    const bit = pathBits[i]
    const index = parseInt(bit, 10)

    if (isNaN(index)) {
      continue
    }

    const hardened = bit[bit.length - 1] === `'`
    const isPriv = !(extendedKey.isNeutered())
    const invalidDerivationPath = hardened && !isPriv

    if (invalidDerivationPath) {
      throw new TypeError('Invalid derivationPath')
    } else if (hardened) {
      extendedKey = extendedKey.deriveHardened(index)
    } else {
      extendedKey = extendedKey.derive(index)
    }
  }
  return extendedKey
}

module.exports = run
