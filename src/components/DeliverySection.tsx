import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const DeliverySection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка и оплата</h2>
        <p className="text-xl text-muted-foreground">Простые условия доставки</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              <Icon name="MapPin" size={24} />
            </div>
            <CardTitle>Зоны доставки</CardTitle>
            <CardDescription>
              Доставляем по всему городу и пригороду
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• В пределах МКАД — бесплатно от 1000 ₽</li>
              <li>• За МКАД — от 200 ₽</li>
              <li>• Среднее время доставки — 30-45 минут</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              <Icon name="CreditCard" size={24} />
            </div>
            <CardTitle>Способы оплаты</CardTitle>
            <CardDescription>
              Удобные варианты оплаты заказа
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Наличными курьеру</li>
              <li>• Картой онлайн</li>
              <li>• Картой курьеру</li>
              <li>• Apple Pay / Google Pay</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              <Icon name="Phone" size={24} />
            </div>
            <CardTitle>Контакты</CardTitle>
            <CardDescription>
              Свяжитесь с нами любым удобным способом
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold mb-1">Телефон</p>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="text-muted-foreground">info@pizzaexpress.ru</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Часы работы</p>
                <p className="text-muted-foreground">Ежедневно 10:00 - 23:00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
