
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility, ArrowDown, ArrowUp, Check } from "lucide-react";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  
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

  const resetAll = () => {
    setFontSize("normal");
    setHighContrast(false);
    setGrayscale(false);
    setInvertColors(false);
    setUnderlineLinks(false);
    setReadableFont(false);
    
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "");
    document.documentElement.classList.remove("high-contrast", "grayscale", "invert-colors", "underline-links", "readable-font");
    document.documentElement.classList.add("text-normal");
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
          </div>
          
          <div>
            <h4 className="font-medium mb-2">הצהרת נגישות</h4>
            <p className="text-sm text-gray-600">
              אתר זה פועל לפי תקן הנגישות הישראלי (ת"י 5568) והתקן הבינלאומי לנגישות (WCAG 2.1 ברמה AA).
              לדיווח על בעיות נגישות, אנא פנו אלינו בטופס יצירת הקשר.
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
  onClick 
}: { 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <Button 
    variant={isActive ? "default" : "outline"}
    onClick={onClick}
    size="sm"
    className={`justify-between h-auto py-2 ${isActive ? "bg-elle-500" : ""}`}
  >
    <span>{label}</span>
    {isActive && <Check className="h-4 w-4" />}
  </Button>
);

export default AccessibilityWidget;
