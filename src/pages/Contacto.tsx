import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    ciudad: "",
    email: "",
    telefono: "",
    tipo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación visual
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!formData.apellidos.trim()) newErrors.apellidos = true;
    if (!formData.ciudad.trim()) newErrors.ciudad = true;
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = true;
    if (!formData.tipo) newErrors.tipo = true;
    if (!formData.mensaje.trim()) newErrors.mensaje = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Formulario válido
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Resetear formulario
      setFormData({
        nombre: "",
        apellidos: "",
        ciudad: "",
        email: "",
        telefono: "",
        tipo: "",
        mensaje: "",
      });
    } else {
      toast.error("Por favor completa todos los campos requeridos");
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-warm py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Contáctanos
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos aquí para responder tus preguntas y ayudarte en lo que necesites
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                        <a
                          href="mailto:contacto@patitasfelices.org"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          contacto@patitasfelices.org
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/10 p-3 rounded-xl">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">Teléfono</h3>
                        <a
                          href="tel:+56912345678"
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          +56 9 1234 5678
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-1">Ubicación</h3>
                        <p className="text-muted-foreground">Santiago, Chile</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 bg-accent rounded-xl">
                  <h3 className="font-heading font-semibold text-lg mb-3">Horario de Atención</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <h2 className="font-heading text-2xl font-bold mb-6">
                      Envíanos un Mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nombre" className="text-base">
                            Nombre <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="nombre"
                            value={formData.nombre}
                            onChange={(e) => handleChange("nombre", e.target.value)}
                            className={errors.nombre ? "border-destructive" : ""}
                            placeholder="Tu nombre"
                          />
                          {errors.nombre && (
                            <p className="text-sm text-destructive mt-1">Este campo es requerido</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="apellidos" className="text-base">
                            Apellidos <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="apellidos"
                            value={formData.apellidos}
                            onChange={(e) => handleChange("apellidos", e.target.value)}
                            className={errors.apellidos ? "border-destructive" : ""}
                            placeholder="Tus apellidos"
                          />
                          {errors.apellidos && (
                            <p className="text-sm text-destructive mt-1">Este campo es requerido</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="ciudad" className="text-base">
                            Ciudad <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="ciudad"
                            value={formData.ciudad}
                            onChange={(e) => handleChange("ciudad", e.target.value)}
                            className={errors.ciudad ? "border-destructive" : ""}
                            placeholder="Tu ciudad"
                          />
                          {errors.ciudad && (
                            <p className="text-sm text-destructive mt-1">Este campo es requerido</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-base">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className={errors.email ? "border-destructive" : ""}
                            placeholder="tu@email.com"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">Email inválido</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="telefono" className="text-base">
                            Teléfono (Opcional)
                          </Label>
                          <Input
                            id="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={(e) => handleChange("telefono", e.target.value)}
                            placeholder="+56 9 1234 5678"
                          />
                        </div>

                        <div>
                          <Label htmlFor="tipo" className="text-base">
                            Tipo de Consulta <span className="text-destructive">*</span>
                          </Label>
                          <Select
                            value={formData.tipo}
                            onValueChange={(value) => handleChange("tipo", value)}
                          >
                            <SelectTrigger className={errors.tipo ? "border-destructive" : ""}>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="adopcion">Adopción</SelectItem>
                              <SelectItem value="donacion">Donación</SelectItem>
                              <SelectItem value="voluntariado">Voluntariado</SelectItem>
                              <SelectItem value="informacion">Información General</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.tipo && (
                            <p className="text-sm text-destructive mt-1">Selecciona una opción</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mensaje" className="text-base">
                          Mensaje <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="mensaje"
                          value={formData.mensaje}
                          onChange={(e) => handleChange("mensaje", e.target.value)}
                          className={`min-h-[150px] ${errors.mensaje ? "border-destructive" : ""}`}
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                        />
                        {errors.mensaje && (
                          <p className="text-sm text-destructive mt-1">Este campo es requerido</p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-gradient-hero text-lg">
                        Enviar Mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
