export interface Product {
  id: number;
  product_name: string;
  price: number;
  image_link: string;
  category: string;
  description: string;
  quantity: number;
}

export interface ProductState {
  products: Product[];
  loadingAll: boolean;
  loadingByCategory: boolean;
  error: string | null;
}