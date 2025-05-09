
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accessibility, PauseCircle, RotateCcw } from "lucide-react";
import { useAccessibility } from "@/hooks/use-accessibility";

// Import the separated components
import AccessibilityToggle from "./accessibility/AccessibilityToggle";
import AccessibilityForm from "./accessibility/AccessibilityForm";
import FontSizeControls from "./accessibility/FontSizeControls";

const AccessibilityWidget = () => {
  const {
    settings,
    changeFontSize,
    toggleHighContrast,
    toggleGrayscale,
    toggleInvertColors,
    toggleUnderlineLinks,
    toggleReadableFont,
    toggleStopAnimations,
    resetAll
  } = useAccessibility();
  
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
      <PopoverContent 
        side="top" 
        align="start" 
        className="w-64 p-4 text-right max-h-[85vh] overflow-y-auto" 
        dir="rtl"
        sideOffset={16}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-elle-500">הגדרות נגישות</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetAll}
            className="text-xs flex items-center gap-1"
            aria-label="איפוס כל הגדרות הנגישות"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            איפוס
          </Button>
        </div>
        
        <div className="space-y-4">
          {/* Font size controls */}
          <FontSizeControls 
            fontSize={settings.fontSize} 
            onChange={changeFontSize} 
          />
          
          {/* Accessibility toggles */}
          <div className="grid grid-cols-1 gap-2">
            <AccessibilityToggle 
              label="ניגודיות גבוהה" 
              isActive={settings.highContrast} 
              onClick={toggleHighContrast} 
            />
            
            <AccessibilityToggle 
              label="מצב שחור-לבן" 
              isActive={settings.grayscale} 
              onClick={toggleGrayscale} 
            />
            
            <AccessibilityToggle 
              label="היפוך צבעים" 
              isActive={settings.invertColors} 
              onClick={toggleInvertColors} 
            />
            
            <AccessibilityToggle 
              label="הדגשת קישורים" 
              isActive={settings.underlineLinks} 
              onClick={toggleUnderlineLinks} 
            />
            
            <AccessibilityToggle 
              label="פונט קריא" 
              isActive={settings.readableFont} 
              onClick={toggleReadableFont} 
            />
            
            <AccessibilityToggle 
              label="עצירת הנפשות" 
              isActive={settings.stopAnimations} 
              onClick={toggleStopAnimations} 
              icon={<PauseCircle className="h-4 w-4 ml-2" />}
            />
          </div>
          
          {/* Accessibility declaration */}
          <AccessibilityForm />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AccessibilityWidget;
