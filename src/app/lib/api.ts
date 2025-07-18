
// src/lib/api.ts

import { Coin } from "@/types/coin"

export async function getTopCoins(page = 1): Promise<Coin[]> {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
    if (!res.ok) throw new Error('Failed to fetch top coins')
    return res.json()
  }
  

export async function getCoinDetails(id: string) {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`)
    if (!res.ok) throw new Error('Failed to fetch coin details')
    return res.json()
}
