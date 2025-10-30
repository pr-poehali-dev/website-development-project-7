import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  type: 'pizza' | 'roll' | 'baked-roll';
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface OrderStatus {
  step: number;
  status: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Маргарита',
    description: 'Моцарелла, базилик, томаты',
    price: 590,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/8de29875-79a1-4cc1-b297-a2e25fcb43a4.jpg',
    category: 'Классические',
    type: 'pizza'
  },
  {
    id: 2,
    name: 'Пепперони',
    description: 'Салями, моцарелла, томатный соус',
    price: 690,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/dac16167-018b-4005-bfaf-d47a40765dfc.jpg',
    category: 'Мясные',
    type: 'pizza'
  },
  {
    id: 3,
    name: 'Вегетарианская',
    description: 'Перец, шампиньоны, оливки, томаты',
    price: 650,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/bad152ec-698e-42d5-9397-d8a6dc74dfe3.jpg',
    category: 'Вегетарианские',
    type: 'pizza'
  },
  {
    id: 4,
    name: 'Четыре сыра',
    description: 'Моцарелла, пармезан, горгонзола, дор блю',
    price: 790,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/8de29875-79a1-4cc1-b297-a2e25fcb43a4.jpg',
    category: 'Классические',
    type: 'pizza'
  },
  {
    id: 5,
    name: 'Мясная',
    description: 'Бекон, ветчина, курица, говядина',
    price: 850,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/dac16167-018b-4005-bfaf-d47a40765dfc.jpg',
    category: 'Мясные',
    type: 'pizza'
  },
  {
    id: 6,
    name: 'Гавайская',
    description: 'Курица, ананас, моцарелла',
    price: 720,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/8de29875-79a1-4cc1-b297-a2e25fcb43a4.jpg',
    category: 'Экзотические',
    type: 'pizza'
  },
  {
    id: 7,
    name: 'Филадельфия',
    description: 'Лосось, сливочный сыр, огурец',
    price: 450,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/d0658495-fc0c-4111-8f1e-fa65472194d4.jpg',
    category: 'Классические',
    type: 'roll'
  },
  {
    id: 8,
    name: 'Калифорния',
    description: 'Краб, авокадо, огурец, икра тобико',
    price: 420,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/164da862-4895-49dc-b6be-fe2d36a8abd5.jpg',
    category: 'Классические',
    type: 'roll'
  },
  {
    id: 9,
    name: 'Унаги',
    description: 'Угорь, огурец, соус унаги, кунжут',
    price: 480,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/164da862-4895-49dc-b6be-fe2d36a8abd5.jpg',
    category: 'Классические',
    type: 'roll'
  },
  {
    id: 10,
    name: 'Дракон',
    description: 'Креветка темпура, авокадо, угорь сверху',
    price: 520,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/d0658495-fc0c-4111-8f1e-fa65472194d4.jpg',
    category: 'Классические',
    type: 'roll'
  },
  {
    id: 11,
    name: 'Запеченный лосось',
    description: 'Лосось, сливочный сыр, запеченный с соусом',
    price: 550,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/5f96d78a-58a5-4663-82d9-f68e29bf9423.jpg',
    category: 'Запеченные',
    type: 'baked-roll'
  },
  {
    id: 12,
    name: 'Запеченный краб',
    description: 'Краб, авокадо, сыр, запеченный с острым соусом',
    price: 530,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/5f96d78a-58a5-4663-82d9-f68e29bf9423.jpg',
    category: 'Запеченные',
    type: 'baked-roll'
  },
  {
    id: 13,
    name: 'Запеченный угорь',
    description: 'Угорь, огурец, сыр моцарелла, соус унаги',
    price: 580,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/5f96d78a-58a5-4663-82d9-f68e29bf9423.jpg',
    category: 'Запеченные',
    type: 'baked-roll'
  },
  {
    id: 14,
    name: 'Запеченный микс',
    description: 'Лосось, угорь, креветка, сыр, спайси соус',
    price: 620,
    image: 'https://cdn.poehali.dev/projects/075a05a8-0fe7-47a0-b7e3-ca94695300d4/files/5f96d78a-58a5-4663-82d9-f68e29bf9423.jpg',
    category: 'Запеченные',
    type: 'baked-roll'
  }
];

const orderSteps = [
  { step: 1, label: 'Оформление', icon: 'ClipboardList' },
  { step: 2, label: 'Готовим', icon: 'ChefHat' },
  { step: 3, label: 'В пути', icon: 'Bike' },
  { step: 4, label: 'Доставлено', icon: 'CheckCircle2' }
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  const pizzas = useMemo(() => menuItems.filter(item => item.type === 'pizza'), []);
  const rolls = useMemo(() => menuItems.filter(item => item.type === 'roll'), []);
  const bakedRolls = useMemo(() => menuItems.filter(item => item.type === 'baked-roll'), []);

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

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrderStatus({ step: 1, status: 'Принят' });
    setCart([]);
    
    setTimeout(() => setOrderStatus({ step: 2, status: 'Готовится' }), 3000);
    setTimeout(() => setOrderStatus({ step: 3, status: 'Доставляется' }), 8000);
    setTimeout(() => setOrderStatus({ step: 4, status: 'Доставлен' }), 15000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🍕</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PizzaExpress
            </h1>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="lg" className="relative">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
                {cart.length > 0 && (
                  <Badge className="ml-2 bg-secondary">{cart.length}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
                <SheetDescription>
                  {cart.length === 0 ? 'Ваша корзина пуста' : `Товаров: ${cart.length}`}
                </SheetDescription>
              </SheetHeader>
              
              <div className="mt-8 space-y-4">
                {cart.map(item => (
                  <Card key={item.id} className="animate-fade-in">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.price} ₽</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {cart.length > 0 && (
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">{getTotalPrice()} ₽</span>
                  </div>
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={placeOrder}
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {orderStatus && (
          <Card className="mb-8 animate-scale-in border-primary shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Package" size={24} />
                Статус заказа
              </CardTitle>
              <CardDescription>Отслеживайте ваш заказ в реальном времени</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Progress value={(orderStatus.step / 4) * 100} className="h-3" />
                <div className="grid grid-cols-4 gap-2">
                  {orderSteps.map((step) => (
                    <div
                      key={step.step}
                      className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                        orderStatus.step >= step.step
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <Icon
                        name={step.icon as any}
                        size={28}
                        className={orderStatus.step >= step.step ? 'animate-scale-in' : ''}
                      />
                      <span className="text-xs font-semibold text-center">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Меню</h2>
          <p className="text-xl text-muted-foreground">Выберите свое блюдо</p>
        </div>

        <Tabs defaultValue="pizza" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="pizza" className="text-lg">
              <span className="mr-2">🍕</span>
              Пицца
            </TabsTrigger>
            <TabsTrigger value="rolls" className="text-lg">
              <span className="mr-2">🍣</span>
              Роллы
            </TabsTrigger>
            <TabsTrigger value="baked-rolls" className="text-lg">
              <span className="mr-2">🔥</span>
              Запечённые
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pizza" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pizzas.map((item, index) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-2xl transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl mb-2">{item.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform"
                      onClick={() => addToCart(item)}
                    >
                      <Icon name="Plus" size={20} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rolls" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rolls.map((item, index) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-2xl transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl mb-2">{item.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform"
                      onClick={() => addToCart(item)}
                    >
                      <Icon name="Plus" size={20} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="baked-rolls" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bakedRolls.map((item, index) => (
                <Card
                  key={item.id}
                  className="group hover:shadow-2xl transition-all duration-300 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-secondary">
                        {item.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl mb-2">{item.name}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {item.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      size="lg"
                      className="w-full group-hover:scale-105 transition-transform"
                      onClick={() => addToCart(item)}
                    >
                      <Icon name="Plus" size={20} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-24 mb-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary to-secondary p-12 text-primary-foreground flex items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">О нас</h2>
                  <p className="text-lg mb-4 opacity-90">
                    PizzaExpress — это современный сервис доставки вкуснейшей пиццы и роллов, 
                    который работает для вас с 2024 года.
                  </p>
                  <p className="text-lg opacity-90">
                    Мы используем только свежие ингредиенты премиум-качества и гарантируем 
                    доставку горячих блюд за 30 минут или возвращаем деньги!
                  </p>
                </div>
              </div>
              
              <div className="p-12 bg-muted">
                <h3 className="text-2xl font-bold mb-6">Почему выбирают нас?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Быстрая доставка</h4>
                      <p className="text-muted-foreground">Горячие блюда за 30 минут или бесплатно</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Icon name="Star" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Премиум качество</h4>
                      <p className="text-muted-foreground">Только свежие ингредиенты от проверенных поставщиков</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Icon name="ChefHat" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Профессиональные повара</h4>
                      <p className="text-muted-foreground">Команда опытных специалистов с 10+ летним стажем</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <Icon name="Percent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Выгодные акции</h4>
                      <p className="text-muted-foreground">Регулярные скидки и специальные предложения</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">🍕 PizzaExpress 🍣</p>
          <p className="text-sm opacity-80">Доставка пиццы и роллов за 30 минут</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;