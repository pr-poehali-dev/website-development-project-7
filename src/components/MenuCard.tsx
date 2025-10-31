import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { MenuItem } from '@/types/menu';

interface MenuCardProps {
  item: MenuItem;
  index: number;
  onAddToCart: (item: MenuItem) => void;
  isSignature?: boolean;
}

export const MenuCard = ({ item, index, onAddToCart, isSignature = false }: MenuCardProps) => {
  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-300 animate-fade-in overflow-hidden ${
        isSignature ? 'border-2 border-primary/50' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden h-64">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge
            className={`absolute top-4 left-4 ${
              isSignature
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0'
                : 'bg-secondary'
            }`}
          >
            {isSignature && '⭐ '}
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
          className={`w-full group-hover:scale-105 transition-transform ${
            isSignature
              ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90'
              : ''
          }`}
          onClick={() => onAddToCart(item)}
        >
          <Icon name="Plus" size={20} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};
