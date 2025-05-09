
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
          <Button variant="outline" size="sm" className="w-full">
            הצהרת נגישות
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" dir="rtl">
          <DialogHeader>
            <DialogTitle>הצהרת נגישות</DialogTitle>
            <DialogDescription>
              מידע על נגישות האתר
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-4">
            <p className="text-sm text-gray-600">
              אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
              האתר מכיל תכונות נגישות רבות כולל אפשרות לשינוי גודל טקסט, ניגודיות צבעים, עצירת הנפשות, ואפשרויות נוספות.
              אנו מחויבים לספק חוויה נגישה לכל המשתמשים שלנו.
            </p>
            
            <p className="text-sm text-gray-600">
              אתר זה נבדק ועומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013.
            </p>
            
            <div className="border-t pt-4 mt-2">
              <h4 className="font-medium text-gray-800 mb-2">דיווח על בעיות נגישות</h4>
              <p className="text-sm text-gray-600">
                מצאתם בעיית נגישות באתר או חסרה לכם אפשרות נגישות כלשהי? 
                אנא צרו קשר עם צוות הנגישות שלנו באחת מהדרכים הבאות:
              </p>
              
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">טלפון:</span>
                  <span className="text-gray-600">054-636-1746</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-gray-700">אימייל:</span>
                  <span className="text-gray-600">elhamashkanta@gmail.com</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3">
                אנו נטפל בפנייתכם בהקדם האפשרי ונעשה כל מאמץ לשפר את חוויית הנגישות באתר.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccessibilityForm;
