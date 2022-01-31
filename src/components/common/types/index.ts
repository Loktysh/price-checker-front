type URL = string;

export type Product = {
  id: number;
  key: string;
  name: string;
  extended_name: string;
  description: string;
  rating: number;
  image: URL;
  price_min: string;
};

export type ItemsData = {
  products: Product[];
};
export type Something = number | string;

export interface AuthFormParams {
  login: string;
  password: string;
}
