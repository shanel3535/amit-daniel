
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
              ELLE | 
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-elle-500"
              >
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-right text-elle-500">ELLE | המשכנתא</SheetTitle>
                <SheetDescription className="text-right">
                  משכנתא בסטנדרט אחר
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <MobileNavLink href="#home">בית</MobileNavLink>
                <MobileNavLink href="#about">אודות</MobileNavLink>
                <MobileNavLink href="#services">שירותים</MobileNavLink>
                <MobileNavLink href="#testimonials">המלצות</MobileNavLink>
                <MobileNavLink href="#contact">צור קשר</MobileNavLink>
                <a href="#contact" className="mt-4">
                  <Button 
                    variant="default"
                    className="w-full bg-elle-500 hover:bg-elle-600"
                  >
                    למילוי טופס פרטים
                  </Button>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t">
                <p className="text-muted-foreground text-sm text-right">
                  יגאל בשן 2, קרית ביאליק<br />
                  054-636-1746<br />
                  elhamashkanta@gmail.com
                </p>
              </div>
            </SheetContent>
          </Sheet>
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

const MobileNavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="block px-4 py-3 text-lg text-elle-500 hover:bg-elle-50 rounded-md text-right w-full"
  >
    {children}
  </a>
);

export default Navbar;
