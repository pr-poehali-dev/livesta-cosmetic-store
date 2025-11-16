import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  skinType: string[];
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Luminous Night Cream',
    category: 'Уход за лицом',
    brand: 'LIVESTA',
    skinType: ['Сухая', 'Нормальная'],
    price: 8900,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/04ace0a1-aa0a-4629-ada2-8d925279f499.jpg',
    description: 'Интенсивный ночной крем с золотом'
  },
  {
    id: 2,
    name: 'Golden Serum Elite',
    category: 'Сыворотки',
    brand: 'LIVESTA',
    skinType: ['Все типы'],
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/9e61572f-ee03-48a1-a47f-213673a0358f.jpg',
    description: 'Премиальная сыворотка с золотом 24К'
  },
  {
    id: 3,
    name: 'Velvet Day Cream',
    category: 'Уход за лицом',
    brand: 'LIVESTA',
    skinType: ['Жирная', 'Комбинированная'],
    price: 7500,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/04ace0a1-aa0a-4629-ada2-8d925279f499.jpg',
    description: 'Дневной крем с бархатистой текстурой'
  },
  {
    id: 4,
    name: 'Radiance Eye Cream',
    category: 'Уход за глазами',
    brand: 'LIVESTA',
    skinType: ['Все типы'],
    price: 6200,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/04ace0a1-aa0a-4629-ada2-8d925279f499.jpg',
    description: 'Крем для кожи вокруг глаз с сиянием'
  },
  {
    id: 5,
    name: 'Essence Hydra Plus',
    category: 'Сыворотки',
    brand: 'LIVESTA',
    skinType: ['Сухая', 'Нормальная'],
    price: 9800,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/9e61572f-ee03-48a1-a47f-213673a0358f.jpg',
    description: 'Увлажняющая эссенция премиум-класса'
  },
  {
    id: 6,
    name: 'Pure Cleansing Balm',
    category: 'Очищение',
    brand: 'LIVESTA',
    skinType: ['Все типы'],
    price: 5400,
    image: 'https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/04ace0a1-aa0a-4629-ada2-8d925279f499.jpg',
    description: 'Бальзам для глубокого очищения кожи'
  }
];

const Index = () => {
  const [skinTypeFilter, setSkinTypeFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [brandFilter, setBrandFilter] = useState<string>('all');

  const filteredProducts = products.filter(product => {
    const skinMatch = skinTypeFilter === 'all' || product.skinType.includes(skinTypeFilter);
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    const brandMatch = brandFilter === 'all' || product.brand === brandFilter;
    return skinMatch && categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">LIVESTA</h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium hover:text-accent transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-accent transition-colors">Каталог</a>
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingBag" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-muted opacity-60" />
        <img 
          src="https://cdn.poehali.dev/projects/0c674414-5803-4114-a23a-cc8bec69ecea/files/d8eed124-0f49-42d0-b71e-5bc1ba5c9bbd.jpg"
          alt="LIVESTA Cosmetics"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-6 animate-fade-in">
            Роскошь в каждом прикосновении
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light tracking-wide">
            Премиальная косметика для истинных ценителей красоты
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-lg">
            Открыть каталог
          </Button>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Премиум качество</h3>
              <p className="text-muted-foreground">Только натуральные компоненты высшего класса</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Проверено временем</h3>
              <p className="text-muted-foreground">Более 20 лет на рынке элитной косметики</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">С любовью к коже</h3>
              <p className="text-muted-foreground">Индивидуальный подход к каждому типу кожи</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-4">Наша коллекция</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите идеальное средство для вашей кожи</p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="w-full md:w-auto">
              <Select value={skinTypeFilter} onValueChange={setSkinTypeFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-card border-border">
                  <SelectValue placeholder="Тип кожи" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все типы кожи</SelectItem>
                  <SelectItem value="Сухая">Сухая</SelectItem>
                  <SelectItem value="Жирная">Жирная</SelectItem>
                  <SelectItem value="Нормальная">Нормальная</SelectItem>
                  <SelectItem value="Комбинированная">Комбинированная</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-card border-border">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="Уход за лицом">Уход за лицом</SelectItem>
                  <SelectItem value="Сыворотки">Сыворотки</SelectItem>
                  <SelectItem value="Уход за глазами">Уход за глазами</SelectItem>
                  <SelectItem value="Очищение">Очищение</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="w-full md:w-auto">
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-full md:w-[200px] bg-card border-border">
                  <SelectValue placeholder="Бренд" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все бренды</SelectItem>
                  <SelectItem value="LIVESTA">LIVESTA</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                      {product.category}
                    </Badge>
                    {product.skinType.map((type) => (
                      <Badge key={type} variant="outline" className="border-border">
                        {type}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-3xl font-light">{product.price.toLocaleString('ru-RU')} ₽</span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">LIVESTA</h3>
              <p className="text-primary-foreground/80">Премиальная косметика для вашей красоты</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-primary-foreground/80">Email: info@livesta.ru</p>
              <p className="text-primary-foreground/80">Тел: +7 (495) 123-45-67</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            © 2024 LIVESTA. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
