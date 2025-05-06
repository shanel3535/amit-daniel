
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // הפעלת האנימציה לאחר טעינת הדף
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="bg-white min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full mb-12">
            <div 
              className={`flex justify-center items-center w-full mb-10 ${isLoaded ? 'opacity-100' : 'opacity-0'} 
              transition-all duration-1000`}
            >
              {/* Changed to always be in row format even on mobile */}
              <div className="flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
                <img 
                  src="/lovable-uploads/2674af9d-8a97-4a68-9e63-c7c88e73ba4f.png" 
                  alt="עמית דניאל" 
                  className={`w-28 sm:w-40 md:w-56 h-auto rounded-full object-cover shadow-xl ${
                    isLoaded ? 'animate-bounce opacity-100 transform rotate-6 scale-100' : 'opacity-0 scale-50'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: "300ms" }}
                />
                <img 
                  src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png" 
                  alt="ELLE Logo" 
                  className={`w-48 sm:w-64 md:w-96 h-auto ${
                    isLoaded ? 'opacity-100 transform scale-100 animate-pulse' : 'opacity-0 scale-50'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: "500ms" }}
                />
              </div>
            </div>
            <h1 className={`heading-1 text-elle-500 mb-6 text-center ${
              isLoaded ? 'opacity-100 animate-fade-up' : 'opacity-0 -translate-y-10'
            } transition-all duration-700`}
                style={{ transitionDelay: "700ms" }}>
              משכנתא בסטנדרט אחר
              <span className={`block text-marble-400 mt-2 ${
                isLoaded ? 'animate-fade-up' : ''
              }`} style={{ transitionDelay: "900ms" }}>
                כי מגיע לך יותר מהבנק
              </span>
            </h1>
            <p className={`text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto ${
              isLoaded ? 'opacity-100 animate-fade-up' : 'opacity-0 -translate-y-8'
            } transition-all duration-700`}
               style={{ transitionDelay: "900ms" }}>
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${
              isLoaded ? 'opacity-100 animate-fade-up' : 'opacity-0'
            } transition-all duration-700`}
                 style={{ transitionDelay: "1100ms" }}>
              <a href="#contact">
                <Button className="elle-button hover:scale-105 transition-transform duration-300" size="lg">
                  למילוי טופס פרטים
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-white text-elle-500 hover:bg-marble-100 border-2 border-elle-500 hover:scale-105 transition-transform duration-300" size="lg">
                  למידע נוסף
                </Button>
              </a>
            </div>
          </div>
          <div className={`w-full max-w-md mt-8 ${
            isLoaded ? 'opacity-100 animate-fade-in transform translate-y-0' : 'opacity-0 translate-y-20'
          } transition-all duration-1000`}
               style={{ transitionDelay: "1300ms" }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-elle-500 text-2xl font-bold mb-4">עמית דניאל</h2>
              <p className="text-gray-700 text-lg mb-2">בעלת ELLE המשכנתא</p>
              <p className="text-gray-600 mb-6">
                יועצת משכנתאות מוסמכת ומומחית בתחום הפיננסי, מלווה לקוחות למציאת הפתרון האידיאלי עבורם.
              </p>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  className="w-full border-elle-500 text-black hover:bg-elle-50 bg-white hover:scale-105 transition-all duration-300"
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
