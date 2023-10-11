import React from 'react'
import { CryptoToken } from './components/CryptoToken'
import tokens from './tokens.json'

export function App() {

  return (
    <div>
      <header>
        <h1>Crypto Tracker</h1>
        <h2>Timer</h2>
      </header>

      <main>
        {tokens.data.map(coin => (
          <CryptoToken
            key={coin.rank}
            id={coin.id}
            rank={coin.rank}
            symbol={coin.symbol}
            name={coin.name}
            supply={coin.supply}
            maxSupply={coin.maxSupply}
            marketCapUsd={coin.marketCapUsd}
            volumeUsd24Hr={coin.volumeUsd24Hr}
            priceUsd={coin.priceUsd}
            changePercent24Hr={coin.changePercent24Hr}
            vwap24hr={coin.vwap24Hr}
            explorer={coin.explorer}
          />
        ))}
      </main>

      <footer>
        <h3>Made with 🫶🏽 in Florida</h3>
      </footer>
    </div>
  )
}
