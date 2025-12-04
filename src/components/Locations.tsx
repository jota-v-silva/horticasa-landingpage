import { MapPin, Clock } from "lucide-react";

const openingHours = [
  { day: "Segunda a Sexta", hours: "09:00 - 13:00, 15:00 - 19:00" },
  { day: "Sábado", hours: "09:00 - 13:00" },
  { day: "Domingo", hours: "Encerrado" },
];

const locations = [
  {
    name: "Horticasa Mação",
    address: "Zona Industrial de, R. das Lamas lote 1, 6120-786 Mação",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.5!2d-7.9977!3d39.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18f42b5e7f5555%3A0x123456789!2sR.%20das%20Lamas%2C%20Ma%C3%A7%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1699999999999",
    mapsLink: "https://maps.google.com/?q=Zona+Industrial+R.+das+Lamas+lote+1+6120-786+Macao+Portugal",
  },
  {
    name: "Horticasa Nisa",
    address: "R. B 14, Nisa, Portugal",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.5!2d-7.6489!3d39.5183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd18f42b5e7f5555%3A0x123456789!2sR.%20B%2014%2C%20Nisa!5e0!3m2!1spt-PT!2spt!4v1699999999999",
    mapsLink: "https://maps.google.com/?q=R.+B+14+Nisa+Portugal",
  },
];

const Locations = () => {
  return (
    <section id="localizacoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Onde Estamos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Visite-nos numa das nossas lojas. Estamos prontos para o ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-md"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={location.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${location.name}`}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {location.name}
                </h3>
                <div className="flex items-start gap-3 text-muted-foreground mb-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{location.address}</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground mb-4">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm space-y-1">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between gap-4">
                        <span>{item.day}:</span>
                        <span className="text-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
