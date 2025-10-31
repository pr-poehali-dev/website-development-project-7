import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { OrderStatus } from '@/types/menu';
import { orderSteps } from '@/data/menuItems';

interface OrderTrackingProps {
  orderStatus: OrderStatus;
}

export const OrderTracking = ({ orderStatus }: OrderTrackingProps) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Отслеживание заказа</h3>
        <div className="mb-8">
          <Progress value={(orderStatus.step / 4) * 100} className="h-2" />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {orderSteps.map((step) => (
            <div
              key={step.step}
              className={`text-center ${
                orderStatus.step >= step.step ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div
                className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                  orderStatus.step >= step.step
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <Icon name={step.icon as any} size={24} />
              </div>
              <p className="text-sm font-medium">{step.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-lg">{orderStatus.status}</p>
      </CardContent>
    </Card>
  );
};
