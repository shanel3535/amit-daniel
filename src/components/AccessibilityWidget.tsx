
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility } from "lucide-react";

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">("normal");
  const [highContrast, setHighContrast] = useState(false);
  
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

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          className="fixed bottom-4 left-4 z-50 rounded-full h-12 w-12 bg-amitblue-500 hover:bg-amitblue-600 flex items-center justify-center"
          aria-label="אפשרויות נגישות"
        >
          <Accessibility className="h-6 w-6 text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" className="w-72 p-4 text-right" dir="rtl">
        <h3 className="font-bold text-lg mb-3 text-amitblue-500">הגדרות נגישות</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">גודל טקסט</h4>
            <div className="flex gap-2">
              <Button 
                variant={fontSize === "normal" ? "default" : "outline"}
                onClick={() => changeFontSize("normal")}
                size="sm"
                className={fontSize === "normal" ? "bg-amitblue-500" : ""}
              >
                רגיל
              </Button>
              <Button 
                variant={fontSize === "large" ? "default" : "outline"}
                onClick={() => changeFontSize("large")}
                size="sm"
                className={fontSize === "large" ? "bg-amitblue-500" : ""}
              >
                גדול
              </Button>
              <Button 
                variant={fontSize === "larger" ? "default" : "outline"}
                onClick={() => changeFontSize("larger")}
                size="sm"
                className={fontSize === "larger" ? "bg-amitblue-500" : ""}
              >
                גדול מאוד
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">ניגודיות</h4>
            <Button 
              variant={highContrast ? "default" : "outline"}
              onClick={toggleHighContrast}
              size="sm"
              className={highContrast ? "bg-amitblue-500 w-full" : "w-full"}
            >
              {highContrast ? "בטל ניגודיות גבוהה" : "הפעל ניגודיות גבוהה"}
            </Button>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">עזרה</h4>
            <p className="text-sm text-gray-600">
              האתר תומך בעזרים שונים לנגישות כולל קורא מסך וניווט מקלדת.
              למידע נוסף ניתן לפנות אלינו בטלפון או בטופס יצירת הקשר.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
