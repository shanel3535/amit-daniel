
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="flex items-center text-elle-500">
            <span className="font-bold text-xl">
              עמית דניאל | 
              <span className="text-marble-400"> המשכנתא</span>
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
          <NavLink href="#home" isScrolled={isScrolled}>בית</NavLink>
          <NavLink href="#about" isScrolled={isScrolled}>אודות</NavLink>
          <NavLink href="#services" isScrolled={isScrolled}>שירותים</NavLink>
          <NavLink href="#testimonials" isScrolled={isScrolled}>המלצות</NavLink>
          <NavLink href="#contact" isScrolled={isScrolled}>צור קשר</NavLink>
          <a href="#contact">
            <Button 
              variant="default"
              className="mr-4 bg-elle-500 hover:bg-elle-600"
            >
              למילוי טופס פרטים
            </Button>
          </a>
        </nav>
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-elle-500"
          >
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isScrolled 
}: { 
  href: string; 
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <a
    href={href}
    className={`px-4 py-2 rounded-md transition-colors duration-300 text-elle-500 hover:bg-elle-50`}
  >
    {children}
  </a>
);

export default Navbar;
