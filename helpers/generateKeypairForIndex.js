const bitcoinjsLib = require('bitcoinjs-lib')

async function run (bip32ExtendedKey, index) {
  let privkey = 'NA'
  const key = bip32ExtendedKey.derive(index)

  if (!key.isNeutered()) {
    privkey = key.keyPair.toWIF(bitcoinjsLib.networks.bitcoin)
  }

  const pubkey = key.getPublicKeyBuffer().toString('hex')
  const keyPair = bitcoinjsLib.ECPair.fromWIF(privkey)
  const address = keyPair.getAddress().toString()

  return {
    privateKey: privkey,
    publicKey: pubkey,
    address
  }
}

module.exports = run
