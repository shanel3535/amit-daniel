
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility, ArrowDown, ArrowUp, Check, Phone, PauseCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  
  const changeFontSize = (size: "normal" | "large" | "larger") => {
    setFontSize(size);
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "");
    document.documentElement.classList.add(`text-${size}`);
  };
  
  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    if (!grayscale) {
      document.documentElement.classList.add("grayscale");
    } else {
      document.documentElement.classList.remove("grayscale");
    }
  };

  const toggleInvertColors = () => {
    setInvertColors(!invertColors);
    if (!invertColors) {
      document.documentElement.classList.add("invert-colors");
    } else {
      document.documentElement.classList.remove("invert-colors");
    }
  };

  const toggleUnderlineLinks = () => {
    setUnderlineLinks(!underlineLinks);
    if (!underlineLinks) {
      document.documentElement.classList.add("underline-links");
    } else {
      document.documentElement.classList.remove("underline-links");
    }
  };

  const toggleReadableFont = () => {
    setReadableFont(!readableFont);
    if (!readableFont) {
      document.documentElement.classList.add("readable-font");
    } else {
      document.documentElement.classList.remove("readable-font");
    }
  };

  const toggleStopAnimations = () => {
    setStopAnimations(!stopAnimations);
    if (!stopAnimations) {
      document.documentElement.classList.add("stop-animations");
      // Find all elements with animation classes and remove them
      document.querySelectorAll('[class*="animate-"]').forEach(element => {
        Array.from(element.classList).forEach(className => {
          if (className.startsWith('animate-')) {
            element.classList.remove(className);
          }
        });
      });
    } else {
      document.documentElement.classList.remove("stop-animations");
      // We don't add animations back as it would require a page refresh
    }
  };

  const resetAll = () => {
    setFontSize("normal");
    setHighContrast(false);
    setGrayscale(false);
    setInvertColors(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    setStopAnimations(false);
    
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "");
    document.documentElement.classList.remove("high-contrast", "grayscale", "invert-colors", "underline-links", "readable-font", "stop-animations");
    document.documentElement.classList.add("text-normal");
    
    window.location.reload(); // Reload to restore animations
  };
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      issue: ""
    }
  });
  
  const onSubmit = (data: any) => {
    console.log("Accessibility report submitted:", data);
    // Here you would typically send this data to your server
    alert("הדיווח נשלח בהצלחה. נחזור אליך בהקדם.");
    form.reset();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          className="fixed bottom-4 left-4 z-50 rounded-full h-14 w-14 bg-elle-500 hover:bg-elle-600 flex items-center justify-center shadow-lg"
          aria-label="אפשרויות נגישות"
        >
          <Accessibility className="h-7 w-7 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="start" className="w-80 p-4 text-right" dir="rtl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-elle-500">הגדרות נגישות</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetAll}
            className="text-xs"
          >
            איפוס הכל
          </Button>
        </div>
        
        <div className="space-y-5">
          <div>
            <h4 className="font-medium mb-2 flex items-center">
              <ArrowUp className="h-4 w-4 ml-1" />
              <ArrowDown className="h-4 w-4 ml-1" />
              גודל טקסט
            </h4>
            <div className="flex gap-2">
              <Button 
                variant={fontSize === "normal" ? "default" : "outline"}
                onClick={() => changeFontSize("normal")}
                size="sm"
                className={fontSize === "normal" ? "bg-elle-500 flex-1" : "flex-1"}
              >
                רגיל
              </Button>
              <Button 
                variant={fontSize === "large" ? "default" : "outline"}
                onClick={() => changeFontSize("large")}
                size="sm"
                className={fontSize === "large" ? "bg-elle-500 flex-1" : "flex-1"}
              >
                גדול
              </Button>
              <Button 
                variant={fontSize === "larger" ? "default" : "outline"}
                onClick={() => changeFontSize("larger")}
                size="sm"
                className={fontSize === "larger" ? "bg-elle-500 flex-1" : "flex-1"}
              >
                גדול מאוד
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <AccessibilityToggle 
              label="ניגודיות גבוהה" 
              isActive={highContrast} 
              onClick={toggleHighContrast} 
            />
            
            <AccessibilityToggle 
              label="מצב שחור-לבן" 
              isActive={grayscale} 
              onClick={toggleGrayscale} 
            />
            
            <AccessibilityToggle 
              label="היפוך צבעים" 
              isActive={invertColors} 
              onClick={toggleInvertColors} 
            />
            
            <AccessibilityToggle 
              label="הדגשת קישורים" 
              isActive={underlineLinks} 
              onClick={toggleUnderlineLinks} 
            />
            
            <AccessibilityToggle 
              label="פונט קריא" 
              isActive={readableFont} 
              onClick={toggleReadableFont} 
            />
            
            <AccessibilityToggle 
              label="עצירת הנפשות" 
              isActive={stopAnimations} 
              onClick={toggleStopAnimations} 
              icon={<PauseCircle className="h-4 w-4 ml-2" />}
            />
          </div>
          
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium">יצירת קשר נגישות</h4>
              <a href="tel:052-123-4567" className="flex items-center text-elle-600 hover:text-elle-700">
                <Phone className="h-4 w-4 ml-1" />
                052-123-4567
              </a>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full">
                  הצהרת נגישות / דיווח על בעיית נגישות
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]" dir="rtl">
                <DialogHeader>
                  <DialogTitle>הצהרת נגישות</DialogTitle>
                  <DialogDescription>
                    דווחו על בעיות נגישות באתר ואנו נטפל בהן בהקדם האפשרי
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">שם מלא</label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        placeholder="השם המלא שלך"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">טלפון</label>
                      <Input
                        id="phone"
                        {...form.register("phone")}
                        placeholder="מספר טלפון"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">אימייל</label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="כתובת האימייל שלך"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="issue" className="text-sm font-medium">תיאור הבעיה</label>
                    <Textarea
                      id="issue"
                      {...form.register("issue")}
                      placeholder="תאר/י את בעיית הנגישות שנתקלת בה"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-elle-500 hover:bg-elle-600">שליחת הדיווח</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">הצהרת נגישות</h4>
            <p className="text-sm text-gray-600">
              אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
              לדיווח על בעיות נגישות, אנא פנו אלינו בטופס יצירת הקשר או צרו קשר בטלפון.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const AccessibilityToggle = ({ 
  label, 
  isActive, 
  onClick,
  icon
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  icon?: React.ReactNode;
}) => (
  <Button 
    variant={isActive ? "default" : "outline"}
    onClick={onClick}
    size="sm"
    className={`justify-between h-auto py-2 ${isActive ? "bg-elle-500" : ""}`}
  >
    <span className="flex items-center">
      {icon}
      {label}
    </span>
    {isActive && <Check className="h-4 w-4" />}
  </Button>
);

export default AccessibilityWidget;
