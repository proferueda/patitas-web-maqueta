import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Calendar, Ruler, Stethoscope, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals } from "@/data/animals";

const AnimalDetail = () => {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === id);

  if (!animal) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Animal no encontrado</h1>
            <Link to="/adoptar">
              <Button>Volver al catálogo</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedAnimals = animals
    .filter((a) => a.id !== animal.id && a.status === "available")
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Back Button */}
        <section className="py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <Link to="/adoptar">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al catálogo
              </Button>
            </Link>
          </div>
        </section>

        {/* Animal Detail */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-card sticky top-24">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-[600px] object-cover"
                  />
                  {animal.status === "adopted" && (
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                      <Badge className="bg-secondary text-secondary-foreground text-2xl py-3 px-6">
                        Adoptado
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="font-heading text-5xl font-bold text-foreground mb-2">
                      {animal.name}
                    </h1>
                    <p className="text-xl text-muted-foreground">{animal.breed}</p>
                  </div>
                  {animal.status === "available" && (
                    <Badge className="bg-primary text-primary-foreground text-lg py-2 px-4">
                      Disponible
                    </Badge>
                  )}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card>
                    <CardContent className="pt-4 flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Edad</p>
                        <p className="font-semibold">{animal.age}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4 flex items-center gap-3">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Ruler className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tamaño</p>
                        <p className="font-semibold">{animal.size}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Sobre {animal.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {animal.description}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {animal.story}
                  </p>
                </div>

                {/* Personality */}
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Personalidad
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {animal.personality.map((trait) => (
                      <Badge
                        key={trait}
                        variant="outline"
                        className="border-primary text-primary px-4 py-2 text-sm"
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Health */}
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Stethoscope className="h-6 w-6 text-secondary" />
                    Salud
                  </h2>
                  <Card className="border-secondary/20">
                    <CardContent className="pt-4">
                      <p className="text-muted-foreground">{animal.health}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* CTA */}
                {animal.status === "available" && (
                  <Link to="/contacto">
                    <Button size="lg" className="w-full bg-gradient-hero text-lg">
                      Solicitar Adopción
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Animals */}
        {relatedAnimals.length > 0 && (
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">
                Otros Animales Disponibles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedAnimals.map((relatedAnimal) => (
                  <Card
                    key={relatedAnimal.id}
                    className="overflow-hidden hover:shadow-warm transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedAnimal.image}
                        alt={relatedAnimal.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-heading text-xl font-bold mb-2">
                        {relatedAnimal.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {relatedAnimal.description}
                      </p>
                      <Link to={`/animal/${relatedAnimal.id}`}>
                        <Button className="w-full bg-gradient-hero">Ver Perfil</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AnimalDetail;
