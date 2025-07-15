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
  byId: Record<string, Product>;
  currentId: string | null;
  productsByCategory: {
    STUFFED_ANIMALS: Product[];
    WOODEN_TOYS: Product[];
  };
  loadingAll: boolean;
  loadingByCategory: boolean;
  loadingById: boolean;
  error: string | null;
}