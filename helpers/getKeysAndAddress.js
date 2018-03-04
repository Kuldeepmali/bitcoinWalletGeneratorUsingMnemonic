const bippath = require('bip32-path')
const getBip32RootKeyFromSeed = require('./generateBip32RootKeyFromSeed')
const getBip32ExtendedKey = require('./generateBip32ExtendedKey')
const getKeypairForIndex = require('./generateKeypairForIndex')
const getLastIndex = require('./generateLastIndex')
const getBasePath = require('./generateBasePath')
const seedFromMnemonic = require('./generateSeedFromMnemonic')

const getKeysAndAddress = async (mnemonic, derivationPath, callback) => {
  try {
    if (!bippath.validateString(derivationPath)) {
      throw new TypeError('Invalid derivationPath')
    }
    const seed = await seedFromMnemonic(mnemonic)
    const bip32RootKey = await getBip32RootKeyFromSeed(seed)
    const path = await getBasePath(derivationPath)
    const bip32extendedKey = await getBip32ExtendedKey(bip32RootKey, path)
    const lastIndex = await getLastIndex(derivationPath)
    const keys = await getKeypairForIndex(bip32extendedKey, parseInt(lastIndex, 10))
    callback(null, keys)
  } catch (err) {
    callback(err, null)
  }
}

module.exports = getKeysAndAddress
