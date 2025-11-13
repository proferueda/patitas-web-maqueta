import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-hero p-2 rounded-xl group-hover:scale-110 transition-transform">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Patitas Felices
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/mision-vision" className="text-foreground hover:text-primary transition-colors font-medium">
              Misión y Visión
            </Link>
            <Link to="/adoptar" className="text-foreground hover:text-primary transition-colors font-medium">
              Adoptar
            </Link>
            <Link to="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
            <Link to="/adoptar">
              <Button className="bg-gradient-hero hover:shadow-warm transition-all">
                Adopta Ahora
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/mision-vision"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Misión y Visión
              </Link>
              <Link
                to="/adoptar"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Adoptar
              </Link>
              <Link
                to="/contacto"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link to="/adoptar" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-hero">
                  Adopta Ahora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
