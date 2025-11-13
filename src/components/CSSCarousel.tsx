import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const CSSCarousel = () => {
  const slides = [
    { image: carousel1, caption: "Nuestros voluntarios dedicados" },
    { image: carousel2, caption: "Familias felices con sus nuevos amigos" },
    { image: carousel3, caption: "Eventos comunitarios" },
    { image: carousel4, caption: "Atención veterinaria profesional" },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-card">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full"
          style={{
            animation: `carousel-slide-${index === 0 ? "" : index + 1} 12s ease-in-out infinite`,
            opacity: index === 0 ? 1 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-8">
            <p className="text-background text-xl md:text-2xl font-heading font-semibold">
              {slide.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CSSCarousel;
