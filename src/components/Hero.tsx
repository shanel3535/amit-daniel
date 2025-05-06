
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-white min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full mb-12 animate-fade-up">
            <div className="flex justify-center w-full mb-10">
              <img 
                src="/lovable-uploads/9f5df582-db78-4848-a356-17011726d7d5.png" 
                alt="ELLE Logo" 
                className="w-full max-w-5xl h-auto" 
              />
            </div>
            <h1 className="heading-1 text-elle-500 mb-6 text-center">
              משכנתא בסטנדרט אחר
              <span className="block text-marble-400 mt-2">כי מגיע לך יותר מהבנק</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
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
                <Button className="bg-white text-elle-500 hover:bg-marble-100 border-2 border-elle-500" size="lg">
                  למידע נוסף
                </Button>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md mt-8 animate-fade-in">
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
