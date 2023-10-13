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
        <ul className='table-header'>
          <li>#</li>
          <li>Name</li>
          <li>24Hr %</li>
          <li className='grid-center'>Price</li>
          <li>Market Cap</li>
          <li>Volume</li>
        </ul>

        {tokens.data.map(coin => (
          <CryptoToken
            key={coin.rank}
            id={coin.id}
            rank={coin.rank}
            symbol={coin.symbol}
            name={coin.name}
            marketCapUsd={coin.marketCapUsd}
            volumeUsd24Hr={coin.volumeUsd24Hr}
            priceUsd={coin.priceUsd}
            changePercent24Hr={coin.changePercent24Hr}
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
