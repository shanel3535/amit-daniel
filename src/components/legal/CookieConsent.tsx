import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show cookie consent after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-[60] flex items-end justify-center p-4"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardContent className="p-6 relative" dir="rtl">
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-2 h-8 w-8 p-0"
            onClick={handleClose}
            aria-label="סגור הודעת קוקיז"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex items-start gap-4 mb-4">
            <Cookie className="h-8 w-8 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
            <div>
              <h2 id="cookie-consent-title" className="text-xl font-bold text-foreground mb-2">
                שימוש בקוקיז ופרטיות
              </h2>
              <div id="cookie-consent-description" className="text-sm text-muted-foreground space-y-2">
                <p>
                  אתר זה משתמש בקוקיז כדי לשפר את חוויית הגלישה שלכם, לנתח תנועה באתר ולהציג תוכן מותאם אישית.
                </p>
                <p>
                  אנו משתמשים בקוקיז טכניים הכרחיים לתפעול האתר, וכן בקוקיז אנליטיים לשיפור השירות.
                  מידע נוסף זמין ב<a href="#privacy-policy" className="text-primary hover:underline">מדיניות הפרטיות</a> שלנו.
                </p>
                <p className="font-medium">
                  על ידי לחיצה על "אישור", אתם מסכימים לשימוש בכל סוגי הקוקיז.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button 
              variant="outline" 
              onClick={handleReject}
              className="order-2 sm:order-1"
            >
              דחיית קוקיז אופציונליים
            </Button>
            <Button 
              onClick={handleAccept}
              className="order-1 sm:order-2"
            >
              אישור קוקיז
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-3 text-center">
            ניתן לשנות העדפות קוקיז בכל עת דרך הגדרות הדפדפן או בפוטר האתר
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;