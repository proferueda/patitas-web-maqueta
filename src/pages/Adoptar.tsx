import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { animals } from "@/data/animals";
import { Heart, ArrowRight } from "lucide-react";

const Adoptar = () => {
  const [filter, setFilter] = useState<"all" | "available" | "adopted">("all");

  const filteredAnimals = animals.filter((animal) => {
    if (filter === "all") return true;
    return animal.status === filter;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-warm py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Adopta y Cambia una Vida
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conoce a nuestros amigos de cuatro patas que buscan un hogar definitivo
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={filter === "all" ? "bg-gradient-hero" : ""}
              >
                Todos
              </Button>
              <Button
                variant={filter === "available" ? "default" : "outline"}
                onClick={() => setFilter("available")}
                className={filter === "available" ? "bg-gradient-hero" : ""}
              >
                Disponibles
              </Button>
              <Button
                variant={filter === "adopted" ? "default" : "outline"}
                onClick={() => setFilter("adopted")}
                className={filter === "adopted" ? "bg-gradient-hero" : ""}
              >
                Adoptados
              </Button>
            </div>
          </div>
        </section>

        {/* Animals Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAnimals.map((animal) => (
                <Card
                  key={animal.id}
                  className="overflow-hidden hover:shadow-warm transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {animal.status === "adopted" && (
                      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                        <Badge className="bg-secondary text-secondary-foreground text-lg py-2 px-4">
                          Adoptado
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading text-2xl font-bold text-foreground">
                        {animal.name}
                      </h3>
                      {animal.status === "available" && (
                        <Badge variant="outline" className="border-primary text-primary">
                          Disponible
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1 mb-4 text-muted-foreground">
                      <p>
                        <span className="font-semibold">Edad:</span> {animal.age}
                      </p>
                      <p>
                        <span className="font-semibold">Tamaño:</span> {animal.size}
                      </p>
                      <p>
                        <span className="font-semibold">Raza:</span> {animal.breed}
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {animal.description}
                    </p>
                    <Link to={`/animal/${animal.id}`}>
                      <Button className="w-full bg-gradient-hero group">
                        Ver Perfil
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ¿Listo para Adoptar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              El proceso de adopción es sencillo. Contáctanos y te ayudaremos a encontrar 
              el compañero perfecto para tu familia.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-gradient-hero text-lg px-8">
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Adoptar;
