
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-amitblue-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">עמית דניאל | משכנתא בסטנדרט אחר</h3>
            <p className="text-white/80 mb-4">
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-5 w-5 text-amitgold-500" />
              <span className="text-white/90">054-636-1746</span>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" aria-label="Facebook" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">בית</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">אודות</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">שירותים</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">המלצות</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">צור קשר</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">מדיניות פרטיות</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">הירשמו לניוזלטר</h3>
            <p className="text-white/80 mb-4">
              הישארו מעודכנים בחדשות האחרונות בשוק המשכנתאות והנדל"ן
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="האימייל שלך"
                className="flex-grow px-4 py-2 rounded-r-none rounded-lg focus:outline-none focus:ring-2 focus:ring-amitgold-500"
              />
              <Button className="bg-amitgold-500 hover:bg-amitgold-600 rounded-l-none">
                הרשמה
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-amitblue-400 text-center text-white/60">
          <p>© {new Date().getFullYear()} עמית דניאל | משכנתא בסטנדרט אחר. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

