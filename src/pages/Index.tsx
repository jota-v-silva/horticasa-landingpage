import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductAreas from "@/components/ProductAreas";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductAreas />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
