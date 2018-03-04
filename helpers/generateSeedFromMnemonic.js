const bip39 = require('bip39')

async function run (mnemonic) {
  if (!bip39.validateMnemonic(mnemonic)) {
    throw new TypeError('Invalid Mnemonic')
  }
  return bip39.mnemonicToSeed(mnemonic)
}

module.exports = run
