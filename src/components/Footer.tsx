
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import TermsOfService from "./legal/TermsOfService";
import CookieSettings from "./legal/CookieSettings";

const Footer = () => {
  return (
    <footer className="bg-elle-500 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png"
                alt="ELLE Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/90 mb-6 leading-relaxed text-right">
              עמית דניאל - יועצת עסקית מנוסה המתמחה בליווי עסקים לצמיחה ופיתוח. 
              עם ניסיון עשיר בתחום, אני מספקת פתרונות מותאמים אישית לכל לקוח.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-right">יצירת קשר</h3>
            <div className="space-y-4 text-right">
              <div className="flex items-center justify-end gap-3">
                <a 
                  href="tel:054-636-1746" 
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="התקשר לטלפון 054-636-1746"
                >
                  054-636-1746
                </a>
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <a 
                  href="mailto:elhamashkanta@gmail.com" 
                  className="text-white/90 hover:text-white transition-colors"
                  aria-label="שלח אימייל לכתובת elhamashkanta@gmail.com"
                >
                  elhamashkanta@gmail.com
                </a>
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-white/90">ישראל</span>
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-right">קישורים מהירים</h3>
            <div className="space-y-3 text-right">
              <a href="#about" className="block text-white/90 hover:text-white transition-colors">
                אודות
              </a>
              <a href="#services" className="block text-white/90 hover:text-white transition-colors">
                שירותים
              </a>
              <a href="#testimonials" className="block text-white/90 hover:text-white transition-colors">
                המלצות
              </a>
              <a href="#contact" className="block text-white/90 hover:text-white transition-colors">
                צור קשר
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <PrivacyPolicy trigger={
              <button className="text-white/80 hover:text-white transition-colors text-sm underline">
                מדיניות פרטיות
              </button>
            } />
            <TermsOfService trigger={
              <button className="text-white/80 hover:text-white transition-colors text-sm underline">
                תנאי שימוש
              </button>
            } />
            <CookieSettings trigger={
              <button className="text-white/80 hover:text-white transition-colors text-sm underline">
                הגדרות קוקיז
              </button>
            } />
            <button 
              className="text-white/80 hover:text-white transition-colors text-sm underline"
              onClick={(e) => {
                e.preventDefault();
                // Trigger accessibility form in the widget
                const accessibilityButton = document.querySelector('[aria-label="אפשרויות נגישות"]') as HTMLButtonElement;
                if (accessibilityButton) {
                  accessibilityButton.click();
                  // Wait for popover to open, then click accessibility form button
                  setTimeout(() => {
                    const formButton = document.querySelector('[aria-label="פתח הצהרת נגישות"]') as HTMLButtonElement;
                    if (formButton) {
                      formButton.click();
                    }
                  }, 100);
                }
              }}
            >
              הצהרת נגישות
            </button>
          </div>
          
          <div className="text-center">
            <p className="text-white/80 flex items-center justify-center gap-2 text-sm">
              נבנה באהבה <Heart className="h-4 w-4 text-red-400" aria-hidden="true" /> עבור עמית דניאל 
              © {new Date().getFullYear()} | כל הזכויות שמורות
            </p>
            <div className="mt-2">
              <p className="text-white/70 text-sm">
                טאקו - בניית אתרים | אפליקציות | דפי נחיתה
              </p>
              <p className="text-white/70 text-sm mt-1">
                053-990-1796
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
