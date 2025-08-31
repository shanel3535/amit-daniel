import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  trigger?: React.ReactNode;
}

const PrivacyPolicy = ({ trigger }: PrivacyPolicyProps) => {
  const defaultTrigger = (
    <Button variant="link" className="text-sm p-0 h-auto text-muted-foreground hover:text-primary">
      מדיניות פרטיות
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[700px] max-h-[85vh]" 
        dir="rtl"
        aria-labelledby="privacy-policy-title"
      >
        <DialogHeader>
          <DialogTitle id="privacy-policy-title">מדיניות פרטיות</DialogTitle>
          <DialogDescription>
            מידע על איסוף, שימוש ושמירה של מידע אישי באתר
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">מבוא</h3>
              <p className="text-muted-foreground leading-relaxed">
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם 
                כאשר אתם משתמשים באתר שלנו. אנו מחויבים לשמור על פרטיותכם ולהגן על המידע האישי שלכם.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">איסוף מידע</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>מידע שאתם מספקים:</strong></p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>שם מלא, כתובת אימייל ומספר טלפון בטופס יצירת קשר</li>
                  <li>תוכן ההודעה שאתם שולחים אלינו</li>
                  <li>העדפות נגישות שאתם בוחרים באתר</li>
                </ul>

                <p className="mt-4"><strong>מידע שנאסף אוטומטית:</strong></p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>כתובת IP ומידע על הדפדפן והמכשיר</li>
                  <li>עמודים שביקרתם ופעילות באתר</li>
                  <li>זמן ותאריך הביקור</li>
                  <li>קוקיז והגדרות נגישות</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">שימוש במידע</h3>
              <div className="text-muted-foreground space-y-2">
                <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>מתן שירותי יעוץ והדרכה</li>
                  <li>מענה לפניות ושאלות</li>
                  <li>שיפור חוויית המשתמש באתר</li>
                  <li>שמירת העדפות נגישות</li>
                  <li>ניתוח ושיפור האתר</li>
                  <li>עמידה בדרישות חוקיות</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">שמירה ואבטחת מידע</h3>
              <p className="text-muted-foreground leading-relaxed">
                אנו נוקטים באמצעי אבטחה מתאימים להגנה על המידע האישי שלכם מפני גישה לא מורשית, 
                שינוי, חשיפה או השמדה. המידע נשמר על שרתים מאובטחים ונגיש רק לאנשי צוות מורשים.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">קוקיז</h3>
              <div className="text-muted-foreground space-y-2">
                <p>האתר משתמש בסוגי קוקיז הבאים:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li><strong>קוקיז הכרחיים:</strong> נדרשים לתפעול בסיסי של האתר</li>
                  <li><strong>קוקיז נגישות:</strong> שומרים את העדפות הנגישות שלכם</li>
                  <li><strong>קוקיז אנליטיים:</strong> מסייעים לנו לשפר את האתר</li>
                </ul>
                <p className="mt-2">
                  תוכלו לנהל העדפות קוקיז דרך הגדרות הדפדפן או דרך הודעת הקוקיז באתר.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">זכויותיכם</h3>
              <div className="text-muted-foreground">
                <p>בהתאם לחוק הגנת הפרטיות, יש לכם הזכויות הבאות:</p>
                <ul className="list-disc list-inside space-y-1 mr-4 mt-2">
                  <li>זכות עיון במידע האישי שלכם</li>
                  <li>זכות לתיקון מידע שגוי</li>
                  <li>זכות למחיקת מידע</li>
                  <li>זכות להגבלת עיבוד המידע</li>
                  <li>זכות להתנגד לעיבוד המידע</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">יצירת קשר</h3>
              <div className="text-muted-foreground">
                <p>לשאלות או בקשות בנוגע למדיניות הפרטיות:</p>
                <div className="mt-2 space-y-1">
                  <p><strong>טלפון:</strong> <a href="tel:054-636-1746" className="text-primary hover:underline">054-636-1746</a></p>
                  <p><strong>אימייל:</strong> <a href="mailto:elhamashkanta@gmail.com" className="text-primary hover:underline">elhamashkanta@gmail.com</a></p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">עדכונים</h3>
              <p className="text-muted-foreground leading-relaxed">
                מדיניות פרטיות זו עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}. 
                אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;