import React, { useEffect, useState } from 'react'
import { CryptoToken } from './components/CryptoToken'
//import tokens from './tokens.json'

type TokenData = {
  id: string,
  rank: string | number,
  symbol: string,
  name: string,
  marketCapUsd: string,
  volumeUsd24Hr: string,
  priceUsd: string,
  changePercent24Hr: string,
  explorer: string | null
}

export function App() {
  //Tells React how the token data will look
  const [data, setData] = useState<TokenData[]>([])

  //Fetch the API data for when the page first loads with useEffect
  useEffect(function() {
    async function loadTokenData() {
      const response = await fetch(
        `https://api.coincap.io/v2/assets`
      )

      if(response.ok) {
        const tokenJson = await response.json()

        setData(tokenJson.data)
      }
    }
    loadTokenData()
  }, [])

  return (
    <div>
      <header>
        <h1>Crypto Tracker</h1>
        <h2>Timer: Refreshing every 10 seconds</h2>
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

        {data.map(coin => (
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
