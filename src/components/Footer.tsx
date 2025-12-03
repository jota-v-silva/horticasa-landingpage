import logo from "@/assets/horticasa-logo.png";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Horticasa" className="h-10 brightness-0 invert" />
            <p className="text-background/70 text-sm text-center md:text-left max-w-xs">
              A sua loja de confiança para agricultura e lar em Mação e Nisa.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mação: R. das Lamas lote 1, Zona Industrial</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nisa: R. B 14</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Horticasa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
