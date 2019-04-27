const Shelly1 = require('./shsw-1')
const Shelly1PM = require('./shsw-pm')
const Shelly2Relay = require('./shsw-21-relay')
const Shelly2Roller = require('./shsw-21-roller')
const Shelly25Relay = require('./shsw-25-relay.js')
const Shelly25Roller = require('./shsw-25-roller.js')
const Shelly4Pro = require('./shsw-44')
const ShellyHT = require('./shht')
const ShellyPlug = require('./shplg-1')
const ShellyPlugS = require('./shplg2-1')
const ShellySense = require('./shsen-1')

const createDevice = (type, id) => {
  switch (type) {
    case 'SHHT-1':
      return new ShellyHT(id)
    case 'SHPLG-1':
      return new ShellyPlug(id)
    case 'SHPLG2-1':
      return new ShellyPlugS(id)
    case 'SHSEN-1':
      return new ShellySense(id)
    case 'SHSW-1':
      return new Shelly1(id)
    case 'SHSW-PM':
      return new Shelly1PM(id)
    case 'SHSW-21':
    case 'SHSW-21-RELAY':
      return new Shelly2Relay(id)
    case 'SHSW-21-ROLLER':
      return new Shelly2Roller(id)
    case 'SHSW-25':
    case 'SHSW-25-RELAY':
      return new Shelly25Relay(id)
    case 'SHSW-25-ROLLER':
      return new Shelly25Roller(id)
    case 'SHSW-44':
      return new Shelly4Pro(id)
    default:
      throw new Error(`Unknown device type "${type}"`)
  }
}

module.exports = {
  createDevice,
  Shelly1,
  Shelly1PM,
  Shelly2Relay,
  Shelly2Roller,
  Shelly25Relay,
  Shelly25Roller,
  Shelly4Pro,
  ShellyHT,
  ShellyPlug,
  ShellyPlugS,
  ShellySense,
}
