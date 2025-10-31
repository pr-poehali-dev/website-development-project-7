import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const PromotionsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и специальные предложения</h2>
        <p className="text-xl text-muted-foreground">Выгодные предложения специально для вас</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 text-white">
            <Badge className="bg-white text-orange-600 mb-4">Суперпредложение</Badge>
            <CardTitle className="text-3xl mb-2">2 пиццы по цене 1</CardTitle>
            <CardDescription className="text-white/90">
              При заказе двух больших пицц — вторая в подарок!
            </CardDescription>
          </div>
          <CardContent className="p-6">
            <p className="text-muted-foreground">Акция действует при заказе от 1500 ₽</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white">
            <Badge className="bg-white text-blue-600 mb-4">Новинка</Badge>
            <CardTitle className="text-3xl mb-2">Фирменные роллы -20%</CardTitle>
            <CardDescription className="text-white/90">
              Скидка на все фирменные роллы от шефа
            </CardDescription>
          </div>
          <CardContent className="p-6">
            <p className="text-muted-foreground">Только до конца месяца!</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden hover:shadow-xl transition-shadow">
          <div className="bg-gradient-to-br from-green-500 to-teal-500 p-8 text-white">
            <Badge className="bg-white text-green-600 mb-4">Бесплатно</Badge>
            <CardTitle className="text-3xl mb-2">Доставка в подарок</CardTitle>
            <CardDescription className="text-white/90">
              Бесплатная доставка при заказе от 1000 ₽
            </CardDescription>
          </div>
          <CardContent className="p-6">
            <p className="text-muted-foreground">В радиусе 5 км от центра</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
