export interface CartItem {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
  status: string;
  product: {
    name: string;
    price: number;
    image_link: string;
  };
}

export interface CartItemState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
}