type URL = string;

export type Product = {
  id: number;
  key: string;
  name: string;
  extended_name: string;
  description: string;
  rating: number;
  image: URL;
};

export type ItemsData = {
  products: Product[];
};
