
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
  >
    <span className="flex items-center">
      {icon}
      {label}
    </span>
    {isActive && <Check className="h-4 w-4" />}
  </Button>
);

export default AccessibilityToggle;
