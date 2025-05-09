
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
          
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
              האתר מכיל תכונות נגישות רבות כולל אפשרות לשינוי גודל טקסט, ניגודיות צבעים, עצירת הנפשות, ואפשרויות נוספות.
              אנו מחויבים לספק חוויה נגישה לכל המשתמשים שלנו.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              אתר זה נבדק ועומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AccessibilityForm;
