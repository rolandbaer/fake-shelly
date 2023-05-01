const Shelly1 = require('./shsw-1')
const Shelly1PM = require('./shsw-pm')
const Shelly2Relay = require('./shsw-21-relay')
const Shelly2Roller = require('./shsw-21-roller')
const Shelly25Relay = require('./shsw-25-relay.js')
const Shelly25Roller = require('./shsw-25-roller.js')
const Shelly4Pro = require('./shsw-44')
const ShellyBulb = require('./shblb-1')
const ShellyDimmer = require('./shdm-1')
const ShellyEM = require('./shem')
const ShellyFlood = require('./shwt-1')
const ShellyHD = require('./shsw-22')
const ShellyHT = require('./shht')
const ShellyPlug = require('./shplg-1')
const ShellyPlugS = require('./shplg-s')
const ShellyRGBW2Color = require('./shrgbw2-color')
const ShellyRGBW2White = require('./shrgbw2-white')
const ShellySense = require('./shsen-1')
const ShellyPlus2PMCover = require('./shplus-2pm-cover.js')

const createDevice = (type, id) => {
  switch (type) {
    case 'SHBLB-1':
      return new ShellyBulb(id)
    case 'SHDM-1':
      return new ShellyDimmer(id)
    case 'SHEM':
      return new ShellyEM(id)
    case 'SHHT-1':
      return new ShellyHT(id)
    case 'SHPLG-1':
    case 'SHPLG2-1':
      return new ShellyPlug(id)
    case 'SHPLG-S':
      return new ShellyPlugS(id)
    case 'SHRGBW2':
    case 'SHRGBW2-COLOR':
      return new ShellyRGBW2Color(id)
    case 'SHRGBW2-WHITE':
      return new ShellyRGBW2White(id)
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
    case 'SHSW-22':
      return new ShellyHD(id)
    case 'SHSW-25':
    case 'SHSW-25-RELAY':
      return new Shelly25Relay(id)
    case 'SHSW-25-ROLLER':
      return new Shelly25Roller(id)
    case 'SHSW-44':
      return new Shelly4Pro(id)
    case 'SHWT-1':
      return new ShellyFlood(id)
    case 'SHPL-2PM-COVER':
      return new ShellyPlus2PMCover(id)
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
  ShellyBulb,
  ShellyDimmer,
  ShellyEM,
  ShellyFlood,
  ShellyHD,
  ShellyHT,
  ShellyPlug,
  ShellyPlugS,
  ShellyRGBW2Color,
  ShellyRGBW2White,
  ShellySense,
  ShellyPlus2PMCover,
}
