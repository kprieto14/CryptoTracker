import React from "react";

type Token = {
    id: string,
    rank: string | number,
    symbol: string,
    name: string,
    supply: number | string,
    maxSupply: number | string | null,
    marketCapUsd: number | string,
    volumeUsd24Hr: number | string,
    priceUsd: number |string,
    changePercent24Hr: number | string,
    vwap24hr: number | string | null,
    explorer: string | null
}

export function CryptoToken(props: Token) {
    return (
        <article>
            {props.name}
        </article>
    )
}