
import { useState, useEffect } from "react";

export interface AccessibilitySettings {
  fontSize: "normal" | "large" | "larger";
  highContrast: boolean;
  grayscale: boolean;
  invertColors: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  stopAnimations: boolean;
}

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: "normal",
    highContrast: false,
    grayscale: false,
    invertColors: false,
    underlineLinks: false,
    readableFont: false,
    stopAnimations: false
  });

  const changeFontSize = (size: "normal" | "large" | "larger") => {
    setSettings(prev => ({ ...prev, fontSize: size }));
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "");
    document.documentElement.classList.add(`text-${size}`);
  };
  
  const toggleHighContrast = () => {
    setSettings(prev => {
      const newValue = !prev.highContrast;
      if (newValue) {
        document.documentElement.classList.add("high-contrast");
      } else {
        document.documentElement.classList.remove("high-contrast");
      }
      return { ...prev, highContrast: newValue };
    });
  };

  const toggleGrayscale = () => {
    setSettings(prev => {
      const newValue = !prev.grayscale;
      if (newValue) {
        document.documentElement.classList.add("grayscale");
      } else {
        document.documentElement.classList.remove("grayscale");
      }
      return { ...prev, grayscale: newValue };
    });
  };

  const toggleInvertColors = () => {
    setSettings(prev => {
      const newValue = !prev.invertColors;
      if (newValue) {
        document.documentElement.classList.add("invert-colors");
      } else {
        document.documentElement.classList.remove("invert-colors");
      }
      return { ...prev, invertColors: newValue };
    });
  };

  const toggleUnderlineLinks = () => {
    setSettings(prev => {
      const newValue = !prev.underlineLinks;
      if (newValue) {
        document.documentElement.classList.add("underline-links");
      } else {
        document.documentElement.classList.remove("underline-links");
      }
      return { ...prev, underlineLinks: newValue };
    });
  };

  const toggleReadableFont = () => {
    setSettings(prev => {
      const newValue = !prev.readableFont;
      if (newValue) {
        document.documentElement.classList.add("readable-font");
      } else {
        document.documentElement.classList.remove("readable-font");
      }
      return { ...prev, readableFont: newValue };
    });
  };

  const toggleStopAnimations = () => {
    setSettings(prev => {
      const newValue = !prev.stopAnimations;
      if (newValue) {
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
      return { ...prev, stopAnimations: newValue };
    });
  };

  const resetAll = () => {
    setSettings({
      fontSize: "normal",
      highContrast: false,
      grayscale: false,
      invertColors: false,
      underlineLinks: false,
      readableFont: false,
      stopAnimations: false
    });
    
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "");
    document.documentElement.classList.remove(
      "high-contrast", 
      "grayscale", 
      "invert-colors", 
      "underline-links", 
      "readable-font", 
      "stop-animations"
    );
    document.documentElement.classList.add("text-normal");
    
    window.location.reload(); // Reload to restore animations
  };

  return {
    settings,
    changeFontSize,
    toggleHighContrast,
    toggleGrayscale,
    toggleInvertColors,
    toggleUnderlineLinks,
    toggleReadableFont,
    toggleStopAnimations,
    resetAll
  };
};
