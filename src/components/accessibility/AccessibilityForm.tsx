
import React from "react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AccessibilityForm = () => {
  return (
    <div className="border-t pt-4 mt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            aria-label="פתח הצהרת נגישות"
          >
            הצהרת נגישות
          </Button>
        </DialogTrigger>
        <DialogContent 
          className="sm:max-w-[400px] max-h-[80vh] overflow-y-auto" 
          dir="rtl"
          aria-labelledby="accessibility-dialog-title"
          role="dialog"
        >
          <DialogHeader>
            <DialogTitle id="accessibility-dialog-title">הצהרת נגישות</DialogTitle>
            <DialogDescription>
              מידע על נגישות האתר
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            <section aria-labelledby="accessibility-standards">
              <h3 id="accessibility-standards" className="text-lg font-medium text-gray-800 mb-2">סטנדרטים ותקנים</h3>
              <p className="text-sm text-gray-600">
                אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
                האתר מכיל תכונות נגישות רבות כולל אפשרות לשינוי גודל טקסט, ניגודיות צבעים, עצירת הנפשות, ואפשרויות נוספות.
              </p>
              
              <p className="text-sm text-gray-600 mt-2">
                אתר זה נבדק ועומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013.
              </p>
            </section>
            
            <section aria-labelledby="accessibility-features">
              <h3 id="accessibility-features" className="text-lg font-medium text-gray-800 mb-2">תכונות נגישות באתר</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>התאמת גודל טקסט לצרכי המשתמש</li>
                <li>אפשרות להגברת ניגודיות צבעים</li>
                <li>תצוגה בשחור-לבן למען בהירות</li>
                <li>אפשרות להיפוך צבעים</li>
                <li>הדגשת קישורים להקלה על הניווט</li>
                <li>שימוש בפונט קריא וברור</li>
                <li>עצירת אנימציות באתר</li>
                <li>תמיכה בניווט באמצעות מקלדת</li>
                <li>תיאורים חלופיים לתמונות (alt text)</li>
              </ul>
            </section>
            
            <section aria-labelledby="accessibility-process">
              <h3 id="accessibility-process" className="text-lg font-medium text-gray-800 mb-2">תהליך ההנגשה</h3>
              <p className="text-sm text-gray-600">
                אתר זה עבר בדיקות נגישות מקיפות, כולל בדיקות אוטומטיות ובדיקות ידניות על ידי מומחי נגישות.
                אנו בוחנים באופן שוטף את הנגישות של האתר ומבצעים שיפורים כדי להבטיח שהאתר נשאר נגיש לכולם.
              </p>
            </section>
            
            <div className="border-t pt-4 mt-2">
              <h3 id="accessibility-contact" className="text-lg font-medium text-gray-800 mb-2">דיווח על בעיות נגישות</h3>
              <p className="text-sm text-gray-600">
                מצאתם בעיית נגישות באתר או חסרה לכם אפשרות נגישות כלשהי? 
                אנא צרו קשר עם צוות הנגישות שלנו באחת מהדרכים הבאות:
              </p>
              
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">טלפון:</span>
                  <a href="tel:054-636-1746" className="text-gray-600 hover:underline">054-636-1746</a>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">אימייל:</span>
                  <a href="mailto:elhamashkanta@gmail.com" className="text-gray-600 hover:underline">elhamashkanta@gmail.com</a>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">
                אנו נטפל בפנייתכם בהקדם האפשרי ונעשה כל מאמץ לשפר את חוויית הנגישות באתר.
                יש לציין את הבעיה הספציפית ואת דרך ההתקשרות המועדפת עליכם.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccessibilityForm;
