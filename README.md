# fake-shelly
fake-shelly is a simple server that simulates [Shelly](https://shelly.cloud) devices.
It has HTTP and CoAP support and can be used to test other pieces of software that work with Shelly devices.

## Usage
Clone this repository, then run `$ bin/fake-shelly <device-type>`.

To run it as superuser with a nodejs version installed only for the user (with nvm) run
`$ sudo ~/.nvm/versions/node/v20.0.0/bin/node ./bin/fake-shelly SHPL-2PM-COVER`

Available device types are:
* API v1
  * SHBLB-1
  * SHDM-1
  * SHEM
  * SHHT-1
  * SHPLG-1
  * SHPLG-S
  * SHPLG2-1
  * SHRGBW2-color
  * SHRGBW2-white
  * SHSEN-1
  * SHSW-1
  * SHSW-PM
  * SHSW-21
  * SHSW-21-roller
  * SHSW-25
  * SHSW-25-roller
  * SHSW-44
  * SHWT-1
* API v2
  * SHPL-2PM-COVER