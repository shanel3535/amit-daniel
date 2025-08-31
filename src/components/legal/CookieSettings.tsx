import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookieSettingsProps {
  trigger?: React.ReactNode;
}

const CookieSettings = ({ trigger }: CookieSettingsProps) => {
  const [settings, setSettings] = useState({
    necessary: true, // Always enabled
    accessibility: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Load saved cookie preferences
    const savedConsent = localStorage.getItem('cookie-consent');
    const savedSettings = localStorage.getItem('cookie-settings');
    
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else if (savedConsent === 'accepted') {
      setSettings(prev => ({ ...prev, accessibility: true, analytics: true }));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cookie-settings', JSON.stringify(settings));
    localStorage.setItem('cookie-consent', 'configured');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Apply settings immediately
    if (!settings.analytics) {
      // Clear analytics cookies if disabled
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (name.includes('_ga') || name.includes('_gid') || name.includes('analytics')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      });
    }
  };

  const defaultTrigger = (
    <Button variant="link" className="text-sm p-0 h-auto text-muted-foreground hover:text-primary">
      הגדרות קוקיז
    </Button>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[500px]" 
        dir="rtl"
        aria-labelledby="cookie-settings-title"
      >
        <DialogHeader>
          <DialogTitle id="cookie-settings-title">הגדרות קוקיז</DialogTitle>
          <DialogDescription>
            נהלו את העדפות הקוקיז שלכם
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
              <div className="space-y-1">
                <Label className="text-base font-medium">קוקיז הכרחיים</Label>
                <p className="text-sm text-muted-foreground">
                  קוקיז אלה נדרשים לתפעול בסיסי של האתר ולא ניתן להשביתם
                </p>
              </div>
              <Switch 
                checked={settings.necessary} 
                disabled={true}
                aria-label="קוקיז הכרחיים - תמיד פעילים"
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-medium">קוקיז נגישות</Label>
                <p className="text-sm text-muted-foreground">
                  שומרים את העדפות הנגישות שלכם (גודל טקסט, ניגודיות, וכו')
                </p>
              </div>
              <Switch 
                checked={settings.accessibility}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, accessibility: checked }))
                }
                aria-label="קוקיז נגישות"
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <Label className="text-base font-medium">קוקיז אנליטיים</Label>
                <p className="text-sm text-muted-foreground">
                  מساעדים לנו להבין איך אתם משתמשים באתר כדי לשפר אותו
                </p>
              </div>
              <Switch 
                checked={settings.analytics}
                onCheckedChange={(checked) => 
                  setSettings(prev => ({ ...prev, analytics: checked }))
                }
                aria-label="קוקיז אנליטיים"
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
              <div className="space-y-1">
                <Label className="text-base font-medium">קוקיז שיווקיים</Label>
                <p className="text-sm text-muted-foreground">
                  משמשים להצגת פרסומות מותאמות (לא פעילים באתר זה)
                </p>
              </div>
              <Switch 
                checked={settings.marketing}
                disabled={true}
                aria-label="קוקיז שיווקיים - לא זמינים"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <DialogTrigger asChild>
              <Button variant="outline">ביטול</Button>
            </DialogTrigger>
            <DialogTrigger asChild>
              <Button onClick={handleSave}>שמירת הגדרות</Button>
            </DialogTrigger>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
            <p className="font-medium mb-1">חשוב לדעת:</p>
            <ul className="space-y-1">
              <li>• השינויים יכנסו לתוקף מיד עם השמירה</li>
              <li>• ניתן לשנות העדפות בכל עת</li>
              <li>• השבתת קוקיז עלולה להשפיע על תפעול האתר</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;