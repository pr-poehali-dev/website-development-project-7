import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MenuItem } from '@/types/menu';
import { MenuCard } from './MenuCard';

interface MenuTabsProps {
  pizzas: MenuItem[];
  rolls: MenuItem[];
  bakedRolls: MenuItem[];
  friedRolls: MenuItem[];
  signatureRolls: MenuItem[];
  sandwiches: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const MenuTabs = ({
  pizzas,
  rolls,
  bakedRolls,
  friedRolls,
  signatureRolls,
  sandwiches,
  onAddToCart
}: MenuTabsProps) => {
  return (
    <Tabs defaultValue="pizza" className="w-full">
      <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-6 mb-8">
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
        <TabsTrigger value="fried-rolls" className="text-lg">
          <span className="mr-2">🍤</span>
          Жареные
        </TabsTrigger>
        <TabsTrigger value="signature-rolls" className="text-lg">
          <span className="mr-2">⭐</span>
          Фирменные
        </TabsTrigger>
        <TabsTrigger value="sandwiches" className="text-lg">
          <span className="mr-2">🥪</span>
          Сэндвичи
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pizza" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="rolls" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rolls.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="baked-rolls" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bakedRolls.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="signature-rolls" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureRolls.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} isSignature />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="sandwiches" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sandwiches.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="fried-rolls" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friedRolls.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} onAddToCart={onAddToCart} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
