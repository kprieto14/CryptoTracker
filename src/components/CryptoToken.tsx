import React from "react";

type TokenProps = {
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

export function CryptoToken({ rank, symbol, name, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, explorer}: TokenProps) {
    function roundDecimal(num: string) {
        return parseFloat(num).toFixed(2)
    }
    
    return (
        <ul className="crypto-token">
            <li>{rank}</li>
            <li><a href={explorer !== null ? explorer : ''}>{name} {symbol}</a></li>
            <li className={roundDecimal(changePercent24Hr) > '0' ? 'positive' : 'negative'}>{roundDecimal(changePercent24Hr)}</li>
            <li className='grid-center'>${roundDecimal(priceUsd)}</li>
            <li>{roundDecimal(marketCapUsd)}</li>
            <li>{roundDecimal(volumeUsd24Hr)}</li>
        </ul>
    )
}