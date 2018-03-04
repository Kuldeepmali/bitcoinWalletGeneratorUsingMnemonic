const bitcoinjsLib = require('bitcoinjs-lib')

async function run (seed) {
  return bitcoinjsLib.HDNode.fromSeedHex(seed, bitcoinjsLib.networks.bitcoin)
}

module.exports = run
