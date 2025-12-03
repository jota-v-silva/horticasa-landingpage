import logo from "@/assets/horticasa-logo-no-background-3.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="Horticasa" className="h-10 md:h-12" />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Produtos
          </a>
          <a href="#localizacoes" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Localizações
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
