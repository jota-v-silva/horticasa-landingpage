import { Leaf } from "lucide-react";
import armazemImage from "@/assets/armazem.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent to-background pt-20">
      {/* Faint background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${armazemImage})` }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Leaf className="w-4 h-4" />
          <span className="text-sm font-medium">Desde sempre ao seu serviço</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-serif">
          A sua loja de confiança para{" "}
          <span className="text-primary">agricultura</span> e{" "}
          <span className="text-primary">casa</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Produtos de qualidade para agricultura, pecuária e lar. 
          Duas lojas em Mação e Nisa ao seu dispor.
        </p>
        
        <a
          href="#localizacoes"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
        >
          Visite-nos
        </a>
      </div>
    </section>
  );
};

export default Hero;
