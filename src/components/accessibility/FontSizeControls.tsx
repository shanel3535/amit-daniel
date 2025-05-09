
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface FontSizeControlsProps {
  fontSize: "normal" | "large" | "larger";
  onChange: (size: "normal" | "large" | "larger") => void;
}

const FontSizeControls = ({ fontSize, onChange }: FontSizeControlsProps) => {
  return (
    <div>
      <h4 className="font-medium mb-2 flex items-center">
        <ArrowUp className="h-4 w-4 ml-1" />
        <ArrowDown className="h-4 w-4 ml-1" />
        גודל טקסט
      </h4>
      <div className="flex gap-2">
        <Button 
          variant={fontSize === "normal" ? "default" : "outline"}
          onClick={() => onChange("normal")}
          size="sm"
          className={fontSize === "normal" ? "bg-elle-500 flex-1" : "flex-1"}
        >
          רגיל
        </Button>
        <Button 
          variant={fontSize === "large" ? "default" : "outline"}
          onClick={() => onChange("large")}
          size="sm"
          className={fontSize === "large" ? "bg-elle-500 flex-1" : "flex-1"}
        >
          גדול
        </Button>
        <Button 
          variant={fontSize === "larger" ? "default" : "outline"}
          onClick={() => onChange("larger")}
          size="sm"
          className={fontSize === "larger" ? "bg-elle-500 flex-1" : "flex-1"}
        >
          גדול מאוד
        </Button>
      </div>
    </div>
  );
};

export default FontSizeControls;
