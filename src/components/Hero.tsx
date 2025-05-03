
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
              <Button className="amit-button" size="lg">
                לתיאום פגישת ייעוץ
              </Button>
              <Button className="bg-white text-amitblue-500 hover:bg-gray-100" size="lg">
                קרא עוד על השירות שלנו
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in">
            <div className="relative">
              <div className="absolute -right-6 -top-6 w-64 h-64 bg-amitgold-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl border border-white/20">
                <div className="mb-6 text-center">
                  <h3 className="font-bold text-xl text-amitblue-500 mb-2">בדיקת משכנתא מהירה</h3>
                  <p className="text-sm text-gray-500">בדקו כמה תוכלו לחסוך עם המשכנתא שלנו</p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">סכום הלוואה</label>
                      <input className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amitgold-500/50 focus:border-amitgold-500" 
                        type="number" placeholder="1,000,000 ₪" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">תקופת החזר</label>
                      <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amitgold-500/50 focus:border-amitgold-500"
                        defaultValue="20 שנים">
                        <option>10 שנים</option>
                        <option>15 שנים</option>
                        <option>20 שנים</option>
                        <option>25 שנים</option>
                        <option>30 שנים</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full amit-button">בדיקת אפשרויות משכנתא</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
