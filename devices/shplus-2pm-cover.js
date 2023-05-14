const Device = require('./base2')
const mixins = require('./mixins')

class ShellyPlus2PMCover extends Device {
  constructor(id) {
    super('SHPL-2PM', 'Plus2PM', 'cover', id)

    mixins.powerMeter(this, 0, 111)
    mixins.relay(this, 0, 112, true)
    mixins.cover(this, 0)
    mixins.powerMeter(this, 1, 121)
    mixins.relay(this, 1, 122, true)

    this
      .on('change:relay0', newValue => {
        this.powerMeter0 = newValue ? 34.70 : 0
      })
      .on('change:relay1', newValue => {
        this.powerMeter1 = newValue ? 12.49 : 0
      })
  }

  _getHttpSettings() {
    return {
      mode: 'cover',
      relays: [
        this._getRelay0HttpSettings(),
        this._getRelay1HttpSettings(),
      ],
      rollers: [
        this._getCoverHttpSettings(),
      ],
      meters: [
        this._getPowerMeter0HttpSettings(),
        this._getPowerMeter1HttpSettings(),
      ],
    }
  }

  _getHttpStatus() {
    return {
      relays: [
        this._getRelay0HttpStatus(),
        this._getRelay1HttpStatus(),
      ],
      rollers: [
        this._getCoverHttpStatus(),
      ],
      meters: [
        this._getPowerMeter0HttpStatus(),
        this._getPowerMeter1HttpStatus(),
      ],
    }
  }
}

module.exports = ShellyPlus2PMCover
