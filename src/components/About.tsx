
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  const benefits = [
    "ייעוץ משכנתא אישי",
    "מומחיות במשא ומתן מול בנקים",
    "חיסכון של אלפי שקלים",
    "תנאי מימון מועדפים",
    "ליווי משפטי בתהליך",
    "דיסקרטיות מלאה",
    "תיקון BDI שלילי",
    "שיפור דירוג אשראי"
  ];

  return (
    <section id="about" className="bg-marble-100 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`max-w-xl ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'} transition-all duration-1000`}>
            <h2 className="heading-2 text-elle-500 mb-6">אודות</h2>
            <p className="text-lg text-gray-800 mb-8">
              עם ניסיון של למעלה מ-10 שנים בתחום המשכנתאות והייעוץ הפיננסי, אני מציעה פתרונות מותאמים אישית המבוססים על ניתוח מעמיק של המצב הפיננסי והיעדים ארוכי הטווח של כל לקוח.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              הגישה המקצועית שלי משלבת ידע מעמיק בשוק המשכנתאות, יכולת ניתוח פיננסי ברמה גבוהה ומיומנויות משא ומתן מול המערכת הבנקאית, מה שמאפשר ללקוחותיי לחסוך עשרות אלפי שקלים ולקבל תנאים מיטביים התואמים את צרכיהם הייחודיים.
            </p>
            <div>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center mb-3 ${
                    isVisible ? 'animate-fade-up opacity-100' : 'opacity-0'
                  }`} 
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <span className="w-6 h-6 bg-elle-500 rounded-full flex items-center justify-center mr-3">
                    <Check className="text-white w-4 h-4" />
                  </span>
                  <span className="text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative h-full flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'} transition-all duration-1000`}>
            <div className="bg-white p-1 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/68c799d7-fe06-4f1b-8850-f20c84ea9eff.png" 
                alt="תמונה של עמית דניאל" 
                className="rounded-lg w-full max-w-md h-auto" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-elle-100 p-4 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 border-2 border-elle-500 max-w-xs">
              <p className="text-elle-700 font-semibold italic">
                "המטרה שלי היא לאפשר לכם לקבל החלטות פיננסיות מושכלות ולהשיג את הבית שתמיד חלמתם עליו בתנאים האופטימליים עבורכם."
              </p>
              <p className="text-right text-elle-500 mt-2">- עמית דניאל</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
