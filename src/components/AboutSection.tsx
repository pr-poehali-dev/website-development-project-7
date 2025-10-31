import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const AboutSection = () => {
  return (
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
                  <Icon name="Award" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Премиум качество</h4>
                  <p className="text-muted-foreground">Только свежие продукты от проверенных поставщиков</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <Icon name="Smile" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Довольные клиенты</h4>
                  <p className="text-muted-foreground">Более 10,000 довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
