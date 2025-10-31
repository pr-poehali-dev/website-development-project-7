import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/data/menuItems';
import { CartItem, MenuItem, OrderStatus } from '@/types/menu';
import { MenuTabs } from '@/components/MenuTabs';
import { ShoppingCart } from '@/components/ShoppingCart';
import { OrderTracking } from '@/components/OrderTracking';
import { AboutSection } from '@/components/AboutSection';
import { PromotionsSection } from '@/components/PromotionsSection';
import { DeliverySection } from '@/components/DeliverySection';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [activeSection, setActiveSection] = useState<'home' | 'promotions' | 'delivery' | 'contacts'>('home');

  const pizzas = useMemo(() => menuItems.filter(item => item.type === 'pizza'), []);
  const rolls = useMemo(() => menuItems.filter(item => item.type === 'roll'), []);
  const bakedRolls = useMemo(() => menuItems.filter(item => item.type === 'baked-roll'), []);
  const friedRolls = useMemo(() => menuItems.filter(item => item.type === 'fried-roll'), []);
  const signatureRolls = useMemo(() => menuItems.filter(item => item.type === 'signature-roll'), []);
  const sandwiches = useMemo(() => menuItems.filter(item => item.type === 'sandwich'), []);
  const woks = useMemo(() => menuItems.filter(item => item.type === 'wok'), []);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  const handleCheckout = () => {
    setOrderStatus({
      step: 1,
      status: 'Ваш заказ принят и обрабатывается...'
    });
    setCart([]);

    setTimeout(() => {
      setOrderStatus({
        step: 2,
        status: 'Готовим ваш заказ с любовью!'
      });
    }, 3000);

    setTimeout(() => {
      setOrderStatus({
        step: 3,
        status: 'Курьер уже в пути к вам!'
      });
    }, 6000);

    setTimeout(() => {
      setOrderStatus({
        step: 4,
        status: 'Заказ доставлен! Приятного аппетита!'
      });
    }, 9000);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Pizza" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">оооо</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <Button variant="ghost" onClick={() => setActiveSection('home')}>
                Меню
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('promotions')}>
                Акции
              </Button>
              <Button variant="ghost" onClick={() => setActiveSection('delivery')}>
                Доставка
              </Button>
            </div>
            <ShoppingCart
              cart={cart}
              totalItems={totalItems}
              totalPrice={totalPrice}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <>
            <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground p-12 md:p-20">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Доставка вкуснейшей пиццы и роллов
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  Горячая пицца и свежие роллы за 30 минут или бесплатно!
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="animate-fade-in text-lg px-8"
                  style={{ animationDelay: '400ms' }}
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Смотреть меню
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
                <div className="text-9xl">🍕</div>
              </div>
            </div>

            {orderStatus && <OrderTracking orderStatus={orderStatus} />}

            <div id="menu" className="mt-16">
              <div className="mb-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Меню</h2>
                <p className="text-xl text-muted-foreground">Выберите свое блюдо</p>
              </div>

              <MenuTabs
                pizzas={pizzas}
                rolls={rolls}
                bakedRolls={bakedRolls}
                friedRolls={friedRolls}
                signatureRolls={signatureRolls}
                sandwiches={sandwiches}
                woks={woks}
                onAddToCart={addToCart}
              />
            </div>

            <AboutSection />
          </>
        )}

        {activeSection === 'promotions' && <PromotionsSection />}
        {activeSection === 'delivery' && <DeliverySection />}
      </main>

      <footer className="bg-muted mt-24 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Pizza" size={18} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">PizzaExpress</span>
          </div>
          <p className="text-muted-foreground mb-2">
            © 2024 PizzaExpress. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            +7 (495) 123-45-67 | info@pizzaexpress.ru
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;