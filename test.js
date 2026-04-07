const { describe, before, it } = require('node:test')
const assert = require('node:assert/strict')
const {load} = require('./index')

describe('radioshack-dump', () => {

    it('Find pair addresses WBTC/WETH', () =>
        load().then(pairs => {
            assert.ok(
                pairs.some(_ =>
                    _.pair == '0xe67384dac18808156232846a8a0cb72381b161de' &&
                    _.token0 == '0x1b0cfc52767599dd07885697e14b1a08a4f8978e' &&
                    _.token1 == '0x2df488b8a4270bac5c2ce5ff467a0c5fd2aa49d6'
                )
            )
        })
    )

})
