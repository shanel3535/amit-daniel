
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, CreditCard, WalletCards, Users } from "lucide-react";

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
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-elle-500 mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון פתרונות פיננסיים מותאמים אישית לצרכים שלך,
            עם דגש על שקיפות, מקצועיות וחיסכון לטווח הארוך.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="elle-service-card border-marble-200">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-elle-500">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-40 w-full mb-4 flex items-center justify-center bg-white rounded-md overflow-hidden">
                  <img src={service.image} alt={service.title} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="w-full">
                  <Button variant="outline" className="w-full border-elle-500 text-elle-500 hover:bg-elle-500 hover:text-white">
                    למידע נוסף
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 rounded-xl p-8 shadow-xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <div className="md:flex items-center gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                  <img src="/lovable-uploads/aaf83708-91b8-4e32-a55a-9ae63fb87046.png" alt="שעון חול" className="max-h-40 object-contain" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-elle-500 mb-2">מעוניינים לדעת עוד על השירותים שלנו?</h3>
                  <p className="text-gray-600">
                    פנו אלינו לתיאום פגישת ייעוץ ראשונית ללא עלות וגלו כמה אתם יכולים לחסוך.
                  </p>
                </div>
              </div>
            </div>
            <a href="#contact">
              <Button size="lg" className="bg-elle-500 hover:bg-elle-600 text-white">
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
