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
  //Start a timer
  const [timer, setTimer] = useState<number>(10);

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
  //Fetch the API data when page is first loaded
  useEffect(loadTokenData, [])

   //Another useEffect to render a timer to show when the API refreshes
   useEffect(() => {
    //Reset timer to 10 when it reaches 0 and calls function to reset API and exit early
    if( timer === 0 ) {
       setTimer(10)
       loadTokenData()
       return
    }
    
    const timerInterval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(timerInterval);
  }, [timer]);

  return (
    <div>
      <header>
        <h1>Crypto Tracker</h1>
        <h2>Refreshing in the next {timer} seconds</h2>
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
