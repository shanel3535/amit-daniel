
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-up">
            <h1 className="heading-1 text-white mb-6">
              משכנתא בסטנדרט אחר
              <span className="block text-amitgold-500 mt-2">כי מגיע לך יותר מהבנק</span>
            </h1>
            <p className="text-white/90 text-lg mb-8">
              אנו מלווים אותך לאורך כל הדרך לקבלת המשכנתא האופטימלית עבורך,
              עם מסלולים מותאמים אישית וחיסכון משמעותי.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="amit-button" size="lg">
                  לתיאום פגישת ייעוץ
                </Button>
              </a>
              <a href="#about">
                <Button className="bg-white text-amitblue-500 hover:bg-gray-100" size="lg">
                  קרא עוד על השירות שלנו
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
