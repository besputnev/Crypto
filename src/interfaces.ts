export interface Coin {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  ath_change_percentage: number;
  atl: number;
}
