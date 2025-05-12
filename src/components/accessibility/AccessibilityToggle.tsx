
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AccessibilityToggleProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

const AccessibilityToggle = ({
  label,
  isActive,
  onClick,
  icon,
}: AccessibilityToggleProps) => (
  <Button
    variant={isActive ? "default" : "outline"}
    onClick={onClick}
    size="sm"
    className={`justify-between h-auto py-2 ${isActive ? "bg-elle-500" : ""}`}
    aria-pressed={isActive}
    aria-label={`${label} - ${isActive ? "מופעל" : "כבוי"}`}
  >
    <span className="flex items-center">
      {icon}
      {label}
    </span>
    {isActive && <Check className="h-4 w-4" aria-hidden="true" />}
  </Button>
);

export default AccessibilityToggle;
