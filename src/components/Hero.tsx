
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center py-20 relative">
      <div className="absolute inset-0 z-0 opacity-20 marble-bg"></div>
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full mb-12 animate-fade-up">
            <div className="flex justify-center w-full">
              <img 
                src="/lovable-uploads/68c799d7-fe06-4f1b-8850-f20c84ea9eff.png" 
                alt="ELLE Logo" 
                className="h-60 w-auto max-w-full" 
              />
            </div>
            <h1 className="heading-1 text-white mb-6 text-center">
              משכנתא בסטנדרט אחר
              <span className="block text-marble-200 mt-2">כי מגיע לך יותר מהבנק</span>
            </h1>
            <p className="text-white/90 text-lg mb-8 text-center max-w-3xl mx-auto">
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact">
                <Button className="elle-button" size="lg">
                  למילוי טופס פרטים
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-white text-elle-500 hover:bg-marble-100" size="lg">
                  למידע נוסף
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md mt-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/20">
              <h2 className="text-white text-2xl font-bold mb-4">עמית דניאל</h2>
              <p className="text-marble-200 text-lg mb-2">בעלת ELLE המשכנתא</p>
              <p className="text-white/80 mb-6">
                יועצת משכנתאות מוסמכת ומומחית בתחום הפיננסי, מלווה לקוחות למציאת הפתרון האידיאלי עבורם.
              </p>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  className="w-full border-white/40 text-black hover:bg-white/20"
                >
                  לפגישת ייעוץ אישית
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
