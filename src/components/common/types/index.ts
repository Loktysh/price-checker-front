type URL = string;

export type Product = {
  id: number;
  key: string;
  extended_name: string;
  description: string;
  rating: number;
  image: URL;
  price_min: string;
};

type PriceChartItem = {
  date: string;
  price: string;
};

export type ProductPrice = {
  prices: {
    charts: PriceChartItem[];
    current: string;
    dbCharts: PriceChartItem[];
    max: {
      amount: string;
      currency: string;
    };
    min: string;
    min_medium: string;
  };
};

export type User = {
  user: {
    login: string;
    user: string;
    trackingProducts: string[];
  };
  currentToken: string;
  currentRenewToken: string;
};

export type Image = {
  bgImage: string | null;
};

export type ItemsData = {
  products: Product[];
};
export type Something = number | string;

export interface AuthFormParams {
  login: string;
  password: string;
}
