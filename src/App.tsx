import React, { useEffect, useState } from 'react'
import { CryptoToken } from './components/CryptoToken'

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
  //Starts a count that will be updated 
  const [count, setCount] = useState<number>(0)

  function loadTokenData() {
    async function fetchData() {
      const response = await fetch(
        `https://api.coincap.io/v2/assets`
      )
  
      if(response.ok) {
        const tokenJson = await response.json()
  
        setData(tokenJson.data)
      }
    }

    fetchData()
  }
  //Fetch the API data for when the count changes
  useEffect(loadTokenData, [count])
  
  //Another useEffect for timer, gets called everytime the count is changed (AKA every 10 seconds due to timer interval)
  useEffect(function(){
    const timerInterval = setInterval(function() {
      //Double checks the count increases every 10 seconds
      console.log(count)
      setCount(count + 1)
    }, 10000)

    function tearDown() {
      clearInterval(timerInterval)
    }

    return tearDown
  }, [count])


  return (
    <div>
      <header>
        <h1>Crypto Tracker</h1>
        <h2>Refreshing every 10 seconds</h2>
        <p>(Even if the price does not actually change)</p>
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
