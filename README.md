# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;radioshack-dump

<br>

Static set of addresses (RadioShack Ethereum mainnet).<br>
New pairs updates happen **every hour** at GitHub Action [update.yml](https://github.com/calp-pro/radioshack-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data:
- `dump_pairs.bin` 1.6 Kb+ 
- `dump_tokens.bin` 1.3 Kb+
- `dump_p2tt.bin` 474 b+

## Output format
`load` and subscribe` methods return collection of pools/pairs.
```js
[
    ...
    {
        id: 8,
        pair: '0x4c55011e3b909e3e8ec3b381d184260bf2c472bf',
        token0: '0x45fdb1b92a649fb6a64ef1511d3ba5bf60044838',
        token1: '0x7a5d3a9dcd33cb8d527f7b5f96eb4fef43d55636'
    },
    ...
]
```
where:
- `8`
  * pair/pool index at factory contract
- `0x4c55011e3b909e3e8ec3b381d184260bf2c472bf`
  * USDS/RADIO AMM [contract](https://etherscan.io/address/0x4c55011e3b909e3e8ec3b381d184260bf2c472bf) address
- `0x45fdb1b92a649fb6a64ef1511d3ba5bf60044838`
  * USDS ERC-20 token [contract](https://etherscan.io/token/0x45fdb1b92a649fb6a64ef1511d3ba5bf60044838) address
- `0x7a5d3a9dcd33cb8d527f7b5f96eb4fef43d55636`
  * RADIO ERC-20 token [contract](https://etherscan.io/token/0x7a5d3a9dcd33cb8d527f7b5f96eb4fef43d55636) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump` & `csv: false`.

## Usage CLI/API:
```bash
> node -e "require('radioshack-dump').load().then(pairs => console.log(pairs.length))"
> 79
```
