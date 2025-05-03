
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, CreditCard, WalletCards, Users } from "lucide-react";

const serviceItems = [
  {
    icon: <Home className="h-10 w-10 text-amitgold-500" />,
    title: "משכנתא לרכישת נכס",
    description: "ליווי בתהליך רכישת נכס ראשון או נכס להשקעה, תוך התאמה אישית של מסלול המימון המתאים ביותר.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-amitgold-500" />,
    title: "מחזור משכנתא",
    description: "בדיקה והתאמה של מסלולי מימון חדשים שיאפשרו לך לחסוך אלפי שקלים בריביות ובתקופת ההחזר.",
  },
  {
    icon: <WalletCards className="h-10 w-10 text-amitgold-500" />,
    title: "משכנתא משולבת",
    description: "יצירת תמהיל מסלולים אופטימלי שמותאם למצבך הפיננסי וליעדים שלך לטווח הקצר והארוך.",
  },
  {
    icon: <Users className="h-10 w-10 text-amitgold-500" />,
    title: "ייעוץ פיננסי כולל",
    description: "תכנון פיננסי מקיף שכולל לא רק את המשכנתא אלא גם את כלל ההיבטים הפיננסיים בחיי המשפחה.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-amitblue-500 mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון פתרונות פיננסיים מותאמים אישית לצרכים שלך,
            עם דגש על שקיפות, מקצועיות וחיסכון לטווח הארוך.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="amit-service-card">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-amitblue-500">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-amitgold-500 text-amitgold-500 hover:bg-amitgold-500 hover:text-white">
                  מידע נוסף
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-amitblue-500 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">מעוניינים לדעת עוד על השירותים שלנו?</h3>
              <p className="text-white/80">
                פנו אלינו לתיאום פגישת ייעוץ ראשונית ללא עלות וגלו כמה אתם יכולים לחסוך.
              </p>
            </div>
            <Button size="lg" className="bg-amitgold-500 hover:bg-amitgold-600 text-white">
              תיאום פגישת ייעוץ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
