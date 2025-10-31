export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  type: 'pizza' | 'roll' | 'baked-roll' | 'fried-roll' | 'signature-roll' | 'sandwich' | 'wok';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderStatus {
  step: number;
  status: string;
}