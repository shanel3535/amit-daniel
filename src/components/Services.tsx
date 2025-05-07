import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, CreditCard, WalletCards, Users, HandCoins } from "lucide-react";
import { useEffect, useState } from "react";

const serviceItems = [
  {
    icon: <Home className="h-10 w-10 text-elle-500" />,
    image: "/lovable-uploads/ec86f526-31b9-45d2-b048-e888bbc97bbe.png",
    title: "משכנתא לרכישת נכס",
    description: "ליווי בתהליך רכישת נכס ראשון או נכס להשקעה, תוך התאמה אישית של מסלול המימון המתאים ביותר.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-elle-500" />,
    image: "/lovable-uploads/308adf70-9c52-4824-bf69-4fece67a2c94.png",
    title: "מחזור משכנתא",
    description: "בדיקה והתאמה של מסלולי מימון חדשים שיאפשרו לך לחסוך אלפי שקלים בריביות ובתקופת ההחזר.",
  },
  {
    icon: <WalletCards className="h-10 w-10 text-elle-500" />,
    image: "/lovable-uploads/9d9e52f0-2e81-40cc-a2c0-1300765932fd.png",
    title: "משכנתא משולבת",
    description: "יצירת תמהיל מסלולים אופטימלי שמותאם למצבך הפיננסי וליעדים שלך לטווח הקצר והארוך.",
  },
  {
    icon: <Users className="h-10 w-10 text-elle-500" />,
    image: "/lovable-uploads/20b14bcb-396b-4f59-82e4-eee71f697aa3.png",
    title: "ייעוץ פיננסי כולל",
    description: "תכנון פיננסי מקיף שכולל לא רק את המשכנתא אלא גם את כלל ההיבטים הפיננסיים בחיי המשפחה.",
  },
  {
    icon: <HandCoins className="h-10 w-10 text-elle-500" />,
    // Updated image for איחוד הלוואות to the newly uploaded wallet with money image
    image: "/lovable-uploads/0cb47055-90c2-4141-a19e-d1fe5133b46c.png", 
    title: "איחוד הלוואות",
    description: "איחוד מספר הלוואות למסלול אחד עם ריבית אטרקטיבית, הקטנת ההחזר החודשי ופריסה נוחה יותר.",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.7;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`heading-2 text-elle-500 mb-4 ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'} transition-all duration-700`}>
            השירותים שלנו
          </h2>
          <p className={`text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'} transition-all duration-700 delay-100`}>
            אנו מציעים מגוון פתרונות פיננסיים מותאמים אישית לצרכים שלך,
            עם דגש על שקיפות, מקצועיות וחיסכון לטווח הארוך.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <Card 
              key={index} 
              className={`elle-service-card border-marble-200 relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
              }`} 
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-15"
                />
              </div>
              <div className="relative z-10">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-elle-500">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 font-medium">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="#contact" className="w-full">
                    <Button 
                      variant="outline" 
                      className="w-full border-elle-500 text-elle-500 hover:bg-elle-500 hover:text-white transition-colors duration-300"
                    >
                      למידע נוסף
                    </Button>
                  </a>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        
        <div className={`mt-16 bg-gray-100 rounded-xl p-8 shadow-xl border border-gray-200 relative overflow-hidden transform transition-all duration-500 ${
          isVisible ? 'animate-fade-in opacity-100 delay-700' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/aaf83708-91b8-4e32-a55a-9ae63fb87046.png" 
              alt="רקע" 
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <div className="md:flex items-center gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-elle-500 mb-2">מעוניינים לדעת עוד על השירותים שלנו?</h3>
                  <p className="text-gray-800 font-medium">
                    פנו אלינו לתיאום פגישת ייעוץ ראשונית ללא עלות וגלו כמה אתם יכולים לחסוך.
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact">
              <Button size="lg" className="bg-elle-500 hover:bg-elle-600 text-white hover:scale-105 transition-all duration-300">
                תיאום פגישת ייעוץ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
