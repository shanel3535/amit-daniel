
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-marble-50 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full">
            <h2 className="heading-2 text-elle-500 mb-6">אודות ELLE המשכנתא</h2>
            <p className="text-gray-700 mb-6">
              כמומחית מובילה בתחום המשכנתאות והייעוץ הפיננסי, אני מציעה פתרונות מותאמים אישית המבוססים על ניתוח מעמיק של המצב הפיננסי והיעדים ארוכי הטווח של כל לקוח.
            </p>
            <p className="text-gray-700 mb-8">
              הגישה המקצועית שלי משלבת ידע מעמיק בשוק המשכנתאות, יכולת ניתוח פיננסי ברמה גבוהה ומיומנויות משא ומתן מול המערכת הבנקאית, מה שמאפשר ללקוחותיי לחסוך עשרות אלפי שקלים ולקבל תנאים מיטביים התואמים את צרכיהם הייחודיים.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">ייעוץ משכנתא אישי</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">מומחיות במשא ומתן מול בנקים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">חיסכון של אלפי שקלים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">תנאי מימון מועדפים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">ליווי משפטי בתהליך</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-elle-500 h-5 w-5" />
                <span className="text-gray-700">דיסקרטיות מלאה</span>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a href="#contact">
                <Button 
                  className="bg-elle-500 hover:bg-elle-600 text-white flex items-center gap-2"
                >
                  למילוי טופס פרטים
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
