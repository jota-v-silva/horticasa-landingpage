import { Wheat, Dog, Home, Wrench, Flower2, Fence, Droplets, Paintbrush } from "lucide-react";

const products = [
  {
    icon: Wheat,
    title: "Agricultura",
    description: "Sementes, fertilizantes, pesticidas e equipamentos agrícolas",
  },
  {
    icon: Dog,
    title: "Pecuária",
    description: "Rações e suplementos para gado, aves e animais domésticos",
  },
  {
    icon: Home,
    title: "Casa",
    description: "Electrodomésticos e artigos para o lar",
  },
  {
    icon: Wrench,
    title: "Bricolage",
    description: "Ferramentas manuais e elétricas para todos os trabalhos",
  },
  {
    icon: Flower2,
    title: "Jardim",
    description: "Plantas, vasos, sementes e acessórios de jardinagem",
  },
  {
    icon: Fence,
    title: "Vedações",
    description: "Postes, arames e redes para vedação de terrenos",
  },
  {
    icon: Droplets,
    title: "Canalização",
    description: "Tubos, torneiras e acessórios de canalização",
  },
  {
    icon: Paintbrush,
    title: "Tintas",
    description: "Tintas, vernizes, pincéis e acessórios de pintura",
  },
];

const ProductAreas = () => {
  return (
    <section id="produtos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            As Nossas Áreas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tudo o que precisa para a sua exploração agrícola e para a sua casa, num só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAreas;
