if(!window.Intl) {
  window.Intl = require('intl') //Polifill
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
var IntlMessageFormat = require('intl-messageformat')

require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

var en = require('./en-US')
var es = require('./es')

var MESSAGES = {}
MESSAGES['en-US'] = en
MESSAGES['es'] = es

var locale = localStorage.locale || 'es'

module.exports = {
  message: function (text, opts) {
    opts = opts || {} // Polyfill to safari bug
    var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(opts)
  },
  date: new IntlRelativeFormat(locale)
}