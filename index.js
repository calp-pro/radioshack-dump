const loader = require('uniswap-v2-loader')
const dump = require('path').join(__dirname, 'dump')

module.exports.load = (params = {}) => loader.load({
    factory: '0x91fae1bc94a9793708fbc66adcb59087c46dee10',
    filename: dump,
    csv: false,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x91fae1bc94a9793708fbc66adcb59087c46dee10',
        filename: dump,
        csv: false,
        ...params
    }
)
