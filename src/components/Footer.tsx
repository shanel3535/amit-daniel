
import { Facebook, Instagram, Linkedin, Phone, WhatsApp } from "lucide-react";
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/972546361746" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 bg-amitblue-400 hover:bg-amitblue-300 rounded-full flex items-center justify-center transition-colors">
                <WhatsApp className="h-5 w-5" />
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
              <li><a href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">מדיניות פרטיות</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">צור קשר</h3>
            <p className="text-white/80 mb-4">
              לפרטים נוספים או לתיאום פגישת ייעוץ, אנא צרו קשר:
            </p>
            <div className="space-y-3">
              <a href="tel:+972546361746" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-amitgold-500" />
                054-636-1746
              </a>
              <a href="https://wa.me/972546361746" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <WhatsApp className="h-4 w-4 text-amitgold-500" />
                שלח הודעת וואטסאפ
              </a>
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amitgold-500">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                contact@example.com
              </a>
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
