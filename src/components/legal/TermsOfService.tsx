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

interface TermsOfServiceProps {
  trigger?: React.ReactNode;
}

const TermsOfService = ({ trigger }: TermsOfServiceProps) => {
  const defaultTrigger = (
    <Button variant="link" className="text-sm p-0 h-auto text-muted-foreground hover:text-primary">
      תנאי שימוש
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
        aria-labelledby="terms-title"
      >
        <DialogHeader>
          <DialogTitle id="terms-title">תנאי שימוש</DialogTitle>
          <DialogDescription>
            התנאים וההגבלות לשימוש באתר
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">כללי</h3>
              <p className="text-muted-foreground leading-relaxed">
                תנאי שימוש אלה חלים על השימוש באתר האינטרנט של עמית דניאל - יעוץ וליווי עסקי. 
                השימוש באתר מהווה הסכמה מלאה לתנאים אלה.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">שירותים</h3>
              <div className="text-muted-foreground space-y-2">
                <p>האתר מספק מידע על השירותים הבאים:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>יעוץ עסקי ואסטרטגי</li>
                  <li>ליווי בתהליכי שינוי ופיתוח עסקי</li>
                  <li>הדרכות וסדנאות מקצועיות</li>
                  <li>ייעוץ בתחום ניהול וקידום עסקים</li>
                </ul>
                <p className="mt-3">
                  המידע באתר הוא למטרות הדרכה וייעוץ בלבד ואינו מהווה תחליף לייעוץ מקצועי מותאם אישית.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">שימוש באתר</h3>
              <div className="text-muted-foreground space-y-2">
                <p>השימוש באתר מותר למטרות הבאות בלבד:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>קבלת מידע על השירותים</li>
                  <li>יצירת קשר לקבלת ייעוץ</li>
                  <li>שימוש באמצעי הנגישות</li>
                </ul>
                
                <p className="mt-3"><strong>אסור לעשות שימוש באתר למטרות הבאות:</strong></p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>פעילות בלתי חוקית או מזיקה</li>
                  <li>שליחת תוכן פוגעני או לא ראוי</li>
                  <li>הפרעה לתפעול האתר</li>
                  <li>ניסיון פריצה או גישה לא מורשית</li>
                </ul>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">זכויות יוצרים וקניין רוחני</h3>
              <p className="text-muted-foreground leading-relaxed">
                כל התוכן באתר, כולל טקסטים, תמונות, עיצוב גרפי וקוד, מוגן בזכויות יוצרים ושייך לעמית דניאל 
                או לצדדים שלישיים. אין להעתיק, להפיץ או להשתמש בתוכן ללא אישור מפורש בכתב.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">אחריות והגבלות</h3>
              <div className="text-muted-foreground space-y-2">
                <p>
                  <strong>כתב ויתור על אחריות:</strong> האתר וכל התוכן בו מסופקים "כפי שהם" ללא אחריות מכל סוג.
                </p>
                <p>
                  <strong>הגבלת אחריות:</strong> בשום מקרה לא נישא באחריות לנזקים עקיפים, תוצאתיים או מיוחדים 
                  הנובעים משימוש באתר או מהסתמכות על המידע בו.
                </p>
                <p>
                  <strong>שירותי צד שלישי:</strong> האתר עשוי להכיל קישורים לאתרים חיצוניים. איננו אחראים לתוכן 
                  או לפרטיות של אתרים אלה.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">פרטיות ונגישות</h3>
              <p className="text-muted-foreground leading-relaxed">
                האתר פועל בהתאם למדיניות הפרטיות ולהצהרת הנגישות המפורטות באתר. 
                אנו מחויבים לשמור על פרטיותכם ולספק חוויית גלישה נגישה לכולם.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">שינויים בתנאים</h3>
              <p className="text-muted-foreground leading-relaxed">
                אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. 
                שינויים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">דין החל ושיפוט</h3>
              <p className="text-muted-foreground leading-relaxed">
                תנאי שימוש אלה כפופים לדיני מדינת ישראל, ובתי המשפט בישראל יהיו בעלי סמכות השיפוט הבלעדית 
                בכל עניין הנוגע לאתר או לשימוש בו.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">יצירת קשר</h3>
              <div className="text-muted-foreground">
                <p>לשאלות בנוגע לתנאי השימוש:</p>
                <div className="mt-2 space-y-1">
                  <p><strong>טלפון:</strong> <a href="tel:054-636-1746" className="text-primary hover:underline">054-636-1746</a></p>
                  <p><strong>אימייל:</strong> <a href="mailto:elhamashkanta@gmail.com" className="text-primary hover:underline">elhamashkanta@gmail.com</a></p>
                </div>
              </div>
            </section>

            <section className="border-t pt-4">
              <p className="text-xs text-muted-foreground">
                תנאי שימוש אלה עודכנו לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfService;