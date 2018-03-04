const getKeysAndAddress = require('./helpers/getKeysAndAddress')

getKeysAndAddress(
  'embody wash stable bicycle cause style silly tree inspire brave equip wreck',
  'm/1/1',
  (err, wallet) => {
    if (err) console.log(err)
    else console.log(wallet)
  }
)
