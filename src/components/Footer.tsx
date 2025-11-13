import { Heart, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-xl">
                <Heart className="h-5 w-5 text-white fill-white" />
              </div>
              <span className="font-heading text-lg font-bold">Patitas Felices</span>
            </div>
            <p className="text-background/80 mb-4">
              Rescatamos, cuidamos y reubicamos animales en situación de vulnerabilidad. 
              Cada vida importa y merece una segunda oportunidad.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:contacto@patitasfelices.org"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>contacto@patitasfelices.org</span>
              </a>
              <a
                href="tel:+56912345678"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+56 9 1234 5678</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© {new Date().getFullYear()} Fundación Patitas Felices. Todos los derechos reservados.</p>
            <p>
              Desarrollado con <Heart className="h-3 w-3 inline fill-primary text-primary" /> por{" "}
              <Link to="/" className="hover:text-background transition-colors">
                Equipo Patitas Felices
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
