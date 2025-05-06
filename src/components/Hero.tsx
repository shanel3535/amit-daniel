
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
            <div className={`flex justify-center items-center w-full mb-10 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-all duration-700`}>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <img 
                  src="/lovable-uploads/2674af9d-8a97-4a68-9e63-c7c88e73ba4f.png" 
                  alt="עמית דניאל" 
                  className={`w-56 h-auto rounded-full object-cover shadow-xl ${isLoaded ? 'animate-fade-in translate-y-0' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: "200ms" }}
                />
                <img 
                  src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png" 
                  alt="ELLE Logo" 
                  className={`w-full max-w-4xl h-auto ${isLoaded ? 'animate-fade-in translate-y-0' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: "400ms" }}
                />
              </div>
            </div>
            <h1 className={`heading-1 text-elle-500 mb-6 text-center ${isLoaded ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: "600ms" }}>
              משכנתא בסטנדרט אחר
              <span className="block text-marble-400 mt-2">כי מגיע לך יותר מהבנק</span>
            </h1>
            <p className={`text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto ${isLoaded ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
               style={{ transitionDelay: "800ms" }}>
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${isLoaded ? 'animate-fade-up opacity-100' : 'opacity-0'}`}
                 style={{ transitionDelay: "1000ms" }}>
              <a href="#contact">
                <Button className="elle-button" size="lg">
                  למילוי טופס פרטים
                </Button>
              </a>
              <a href="#contact">
                <Button className="bg-white text-elle-500 hover:bg-marble-100 border-2 border-elle-500" size="lg">
                  למידע נוסף
                </Button>
              </a>
            </div>
          </div>
          <div className={`w-full max-w-md mt-8 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
               style={{ transitionDelay: "1200ms" }}>
            <div className="bg-gray-100 p-6 rounded-lg shadow-xl border border-gray-200">
              <h2 className="text-elle-500 text-2xl font-bold mb-4">עמית דניאל</h2>
              <p className="text-gray-700 text-lg mb-2">בעלת ELLE המשכנתא</p>
              <p className="text-gray-600 mb-6">
                יועצת משכנתאות מוסמכת ומומחית בתחום הפיננסי, מלווה לקוחות למציאת הפתרון האידיאלי עבורם.
              </p>
              <a href="#contact">
                <Button 
                  variant="outline" 
                  className="w-full border-elle-500 text-black hover:bg-elle-50 bg-white"
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
