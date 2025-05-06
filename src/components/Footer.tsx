
import { Facebook, Instagram, Linkedin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-elle-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">ELLE | המשכנתא</h3>
            </div>
            <p className="text-white/80 mb-4">
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="h-5 w-5 text-marble-200" />
              <span className="text-white/90">054-636-1746</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-marble-200">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-white/90">יגאל בשן 2, קרית ביאליק</span>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 bg-elle-400 hover:bg-elle-300 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 bg-elle-400 hover:bg-elle-300 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 bg-elle-400 hover:bg-elle-300 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://wa.me/972546361746" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 bg-elle-400 hover:bg-elle-300 rounded-full flex items-center justify-center transition-colors">
                <MessageSquare className="h-5 w-5" />
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
                <Phone className="h-4 w-4 text-marble-200" />
                054-636-1746
              </a>
              <a href="https://wa.me/972546361746" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <MessageSquare className="h-4 w-4 text-marble-200" />
                שלח הודעת וואטסאפ
              </a>
              <a href="mailto:elhamashkanta@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-marble-200">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                elhamashkanta@gmail.com
              </a>
            </div>
            
            <div className="mt-6">
              <Button 
                className="w-full bg-marble-100 hover:bg-marble-200 text-elle-500 flex items-center justify-center gap-2"
                onClick={() => window.open('https://wa.me/972546361746', '_blank')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1A1A1A" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                פתח שיחת וואטסאפ
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-elle-400 text-center text-white/60">
          <p>© {new Date().getFullYear()} ELLE | המשכנתא - ייעוץ משכנתאות ופיננסים. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
