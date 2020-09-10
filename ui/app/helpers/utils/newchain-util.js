import base58check from 'base58check'

// config chain ID
const devChainId = 1002
const testChainId = 1007
const mainChainId = 1012

const PREFIX = 'NEW'

/**
 * convert hex address to new address.
 * @param {string} hexAddress
 * @param {number} chainId
 */
function hexAddress2NewAddress (hexAddress, chainId) {
  hexAddress = hexAddress.trim()
  if (typeof (hexAddress) === 'string' && hexAddress.startsWith(PREFIX)) {
    return hexAddress
  }
  if (hexAddress.startsWith('0x')) {
    hexAddress = hexAddress.slice(2)
  }
  if (hexAddress.length !== 40) {
    return null
  }
  chainId = Number(chainId)
  let data = chainId.toString(16).slice(-8) + hexAddress
  if (data.length % 2 !== 0) {
    data = '0' + data
  }
  return PREFIX + base58check.encode(data)
}

/**
 * convert new address to hex address.
 * @param {string|null} newAddress
 * @return {string|null} hexAddress
 */
function newAddress2HexAddress (newAddress) {
  newAddress = newAddress.trim()
  if (typeof (newAddress) === 'string' && newAddress.startsWith(PREFIX) && newAddress.length === 39) {
    return '0x' + base58check.decode(newAddress.slice(3), 'hex').data.slice(4)
  } else {
    return null
  }
}

/**
 * check address is valid NEW address head or not
 * @param {string} address
 * @returns {boolean}
 */
function isValidNewAddressHead (address) {
  const addressLengthIsLessThanFull = address.length < 39
  const addressIsPrefixWithNEW = address.startsWith(PREFIX)

  return addressLengthIsLessThanFull && addressIsPrefixWithNEW
}

/**
 * check address is valid NEW address or not
 * @param {string} address
 * @returns {boolean}
 */
function isValidNewAddress (address) {
  if (typeof (address) === 'string' && address.startsWith(PREFIX) && address.length === 39) {
    const hexAddress = newAddress2HexAddress(address)
    if ((hexAddress !== null) && (hexAddress.length === 42)) {
      return true
    }
  }
  return false
}

// module.exports = { devChainId, testChainId, mainChainId, hexAddress2NewAddress, newAddress2HexAddress }
export { devChainId, testChainId, mainChainId, hexAddress2NewAddress, newAddress2HexAddress, isValidNewAddressHead, isValidNewAddress }
