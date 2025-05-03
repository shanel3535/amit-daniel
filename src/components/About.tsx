
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-amitblue-400 to-amitblue-600 shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-40 bg-amitgold-500 rounded-lg flex items-center justify-center p-6 shadow-lg">
                <p className="text-white text-lg font-medium">"העתיד הפיננסי שלך הוא העדיפות הראשונה שלנו"</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="heading-2 text-amitblue-500 mb-6">אודות עמית דניאל</h2>
            <p className="text-gray-700 mb-6">
              עם ניסיון של למעלה מ-15 שנה בתחום המשכנתאות והייעוץ הפיננסי, אני מתמחה בהתאמת מסלולי משכנתא
              המותאמים באופן אישי למצב הכלכלי ולצרכים הספציפיים של כל לקוח.
            </p>
            <p className="text-gray-700 mb-8">
              בשנים האחרונות סייעתי למאות משפחות וזוגות צעירים לרכוש את הבית של חלומותיהם
              תוך חיסכון של עשרות אלפי שקלים בעלויות המשכנתא. השיטה שלי מבוססת על ניתוח
              מעמיק של השוק, הבנה מעמיקה של מסלולי המימון ומשא ומתן מול הבנקים.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">ייעוץ משכנתא אישי</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">מומחיות במשא ומתן מול בנקים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">חיסכון של אלפי שקלים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">תנאי מימון מועדפים</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">ליווי משפטי בתהליך</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-amitgold-500 h-5 w-5" />
                <span className="text-gray-700">דיסקרטיות מלאה</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
