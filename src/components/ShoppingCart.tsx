import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { CartItem } from '@/types/menu';

interface ShoppingCartProps {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
  onCheckout: () => void;
}

export const ShoppingCart = ({
  cart,
  totalItems,
  totalPrice,
  onUpdateQuantity,
  onRemoveFromCart,
  onCheckout
}: ShoppingCartProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" className="relative">
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Корзина
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров в корзине: ${totalItems}`}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    <Icon name="Minus" size={16} />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    <Icon name="Plus" size={16} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onRemoveFromCart(item.id)}
                    className="ml-auto"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Итого:</span>
              <span>{totalPrice} ₽</span>
            </div>
            <Button size="lg" className="w-full" onClick={onCheckout}>
              Оформить заказ
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
