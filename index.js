const loader = require('uniswap-v2-loader')
const dump_csv = require('path').join(__dirname, 'dump.csv')

module.exports.load = (params = {}) => loader.load({
    factory: '0x91fae1bc94a9793708fbc66adcb59087c46dee10',
    filename: dump_csv,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x91fae1bc94a9793708fbc66adcb59087c46dee10',
        filename: dump_csv,
        ...params
    }
)