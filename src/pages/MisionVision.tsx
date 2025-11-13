import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MisionVision = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-warm py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nuestra Misión y Visión
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conoce lo que nos mueve y hacia dónde vamos
            </p>
          </div>
        </section>

        {/* Misión y Visión - Side by Side */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Misión */}
              <Card className="border-2 border-primary/20 hover:shadow-warm transition-all">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground">
                      Nuestra Misión
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Rescatar, rehabilitar y reubicar animales en situación de vulnerabilidad, 
                      brindándoles atención médica, alimentación adecuada y un entorno seguro 
                      mientras encuentran un hogar definitivo.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Trabajamos incansablemente para promover la tenencia responsable de mascotas 
                      y educar a la comunidad sobre el respeto y cuidado de los animales.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Cada vida importa, y nos comprometemos a dar a cada animal la oportunidad 
                      de experimentar amor, cuidado y dignidad.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visión */}
              <Card className="border-2 border-secondary/20 hover:shadow-warm transition-all">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-secondary/10 p-4 rounded-xl">
                      <Eye className="h-10 w-10 text-secondary" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground">
                      Nuestra Visión
                    </h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Ser una organización referente en el rescate y protección animal a nivel 
                      nacional, reconocida por nuestro compromiso, profesionalismo y resultados 
                      tangibles.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Aspiramos a un futuro donde no existan animales en situación de calle, 
                      donde cada mascota tenga un hogar amoroso y donde la comunidad valore 
                      y respete a todos los seres vivos.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Trabajamos por construir una sociedad más empática, responsable y 
                      comprometida con el bienestar animal.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Valores */}
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-card transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Compasión</h3>
                  <p className="text-muted-foreground">
                    Tratamos a cada animal con amor y empatía
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Compromiso</h3>
                  <p className="text-muted-foreground">
                    Dedicados al 100% a nuestra causa
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Transparencia</h3>
                  <p className="text-muted-foreground">
                    Actuamos con honestidad y claridad
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-card transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Responsabilidad</h3>
                  <p className="text-muted-foreground">
                    Cuidamos cada detalle en nuestro trabajo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-hero text-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Nuestro Impacto
              </h2>
              <p className="text-xl text-background/90 max-w-2xl mx-auto">
                Números que reflejan nuestro compromiso
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 font-heading">500+</div>
                <p className="text-xl text-background/90">Animales Rescatados</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 font-heading">350+</div>
                <p className="text-xl text-background/90">Adopciones Exitosas</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 font-heading">50+</div>
                <p className="text-xl text-background/90">Voluntarios Activos</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 font-heading">5</div>
                <p className="text-xl text-background/90">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MisionVision;
