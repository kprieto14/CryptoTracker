import React from "react";

type Token = {
    id: string,
    rank: string | number,
    symbol: string,
    name: string,
    marketCapUsd: number | string,
    volumeUsd24Hr: number | string,
    priceUsd: number |string,
    changePercent24Hr: number | string,
    explorer: string | null
}

export function CryptoToken({ rank, symbol, name, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, explorer}: Token) {
    return (
        <article>
            <ul>
                <li>{rank}</li>
                <li><a href={explorer !== null ? explorer : ''}>{name} {symbol}</a></li>
                {/* Call a function that will parse string into an int and round to the nearest 2 decimals */}
                <li>{changePercent24Hr}</li>
                {/* Call a function that will parse string into an int and round to the nearest 2 decimals */}
                <li>{priceUsd}</li>
                {/* Call a function that will parse string into an int and round to the nearest 2 decimals */}
                <li>{marketCapUsd}</li>
                {/* Call a function that will parse string into an int and round to the nearest 2 decimals */}
                <li>{volumeUsd24Hr}</li>
            </ul>
        </article>
    )
}