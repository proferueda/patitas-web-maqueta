import { Link } from "react-router-dom";
import { Heart, Users, Home, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSSCarousel from "@/components/CSSCarousel";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBanner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-background">
            <div className="animate-float">
              <Heart className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 text-primary fill-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Patitas Felices
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-background/90">
              Rescatamos, cuidamos y reubicamos animales. Cada vida merece una segunda oportunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/adoptar">
                <Button size="lg" className="bg-gradient-hero hover:shadow-warm text-lg px-8">
                  Conócenos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-background/10 backdrop-blur border-background text-background hover:bg-background hover:text-foreground">
                  Contáctanos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 md:py-24 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nuestra Labor
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conoce el trabajo que realizamos día a día para salvar vidas
              </p>
            </div>
            <CSSCarousel />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                ¿Cómo Puedes Ayudar?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Hay muchas formas de unirte a nuestra causa y hacer la diferencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-warm transition-all group cursor-pointer">
                <CardContent className="pt-6">
                  <Link to="/adoptar" className="block">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Adoptar</h3>
                    <p className="text-muted-foreground">
                      Dale un hogar definitivo a un animal rescatado
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-all group cursor-pointer">
                <CardContent className="pt-6">
                  <Link to="/contacto" className="block">
                    <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <DollarSign className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Donar</h3>
                    <p className="text-muted-foreground">
                      Tu apoyo nos ayuda a seguir salvando vidas
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-all group cursor-pointer">
                <CardContent className="pt-6">
                  <Link to="/contacto" className="block">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Voluntariado</h3>
                    <p className="text-muted-foreground">
                      Únete a nuestro equipo de voluntarios
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-warm transition-all group cursor-pointer">
                <CardContent className="pt-6">
                  <Link to="/mision-vision" className="block">
                    <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Home className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">Hogar Temporal</h3>
                    <p className="text-muted-foreground">
                      Ofrece un hogar temporal mientras encuentran familia
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Historias que Inspiran
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Lo que dicen las familias que adoptaron
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Adoptar a Luna fue la mejor decisión de nuestras vidas. Ella llegó a completar nuestra familia."
                  </p>
                  <p className="font-semibold">- María González</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Max es el mejor compañero que pudimos pedir. El equipo de Patitas Felices fue increíble."
                  </p>
                  <p className="font-semibold">- Carlos Ramírez</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Ser voluntario en esta fundación cambió mi vida. Ver a los animales encontrar su hogar no tiene precio."
                  </p>
                  <p className="font-semibold">- Ana Torres</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Juntos Podemos Hacer la Diferencia
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-background/90">
              Cada adopción, donación o hora de voluntariado salva vidas
            </p>
            <Link to="/adoptar">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                Ver Animales Disponibles
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

export default Index;
