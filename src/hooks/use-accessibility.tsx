
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

const defaultSettings: AccessibilitySettings = {
  fontSize: "normal",
  highContrast: false,
  grayscale: false,
  invertColors: false,
  underlineLinks: false,
  readableFont: false,
  stopAnimations: false
};

export const useAccessibility = () => {
  // Initialize with default settings
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  
  // Load saved settings from localStorage on initial render
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibility-settings");
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings(parsedSettings);
        
        // Apply saved settings on load
        applySettings(parsedSettings);
      } catch (error) {
        console.error("Failed to parse saved accessibility settings", error);
      }
    }
  }, []);
  
  // Apply settings to DOM elements
  const applySettings = (currentSettings: AccessibilitySettings) => {
    // Clear all accessibility classes first
    document.documentElement.className = document.documentElement.className
      .replace(/text-(normal|large|larger)/g, "")
      .replace(/(high-contrast|grayscale|invert-colors|underline-links|readable-font|stop-animations)/g, "");
    
    // Apply font size
    document.documentElement.classList.add(`text-${currentSettings.fontSize}`);
    
    // Apply other settings
    if (currentSettings.highContrast) document.documentElement.classList.add("high-contrast");
    if (currentSettings.grayscale) document.documentElement.classList.add("grayscale");
    if (currentSettings.invertColors) document.documentElement.classList.add("invert-colors");
    if (currentSettings.underlineLinks) document.documentElement.classList.add("underline-links");
    if (currentSettings.readableFont) document.documentElement.classList.add("readable-font");
    if (currentSettings.stopAnimations) {
      document.documentElement.classList.add("stop-animations");
      stopAllAnimations();
    }
  };
  
  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("accessibility-settings", JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const changeFontSize = (size: "normal" | "large" | "larger") => {
    setSettings(prev => ({ ...prev, fontSize: size }));
  };
  
  const toggleHighContrast = () => {
    setSettings(prev => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleGrayscale = () => {
    setSettings(prev => ({ ...prev, grayscale: !prev.grayscale }));
  };

  const toggleInvertColors = () => {
    setSettings(prev => ({ ...prev, invertColors: !prev.invertColors }));
  };

  const toggleUnderlineLinks = () => {
    setSettings(prev => ({ ...prev, underlineLinks: !prev.underlineLinks }));
  };

  const toggleReadableFont = () => {
    setSettings(prev => ({ ...prev, readableFont: !prev.readableFont }));
  };

  // Stop all animations in the document
  const stopAllAnimations = () => {
    document.querySelectorAll('[class*="animate-"]').forEach(element => {
      Array.from(element.classList).forEach(className => {
        if (className.startsWith('animate-')) {
          element.classList.remove(className);
        }
      });
    });
  };

  const toggleStopAnimations = () => {
    setSettings(prev => ({ ...prev, stopAnimations: !prev.stopAnimations }));
  };

  const resetAll = () => {
    // Reset to default settings
    setSettings(defaultSettings);
    
    // Clear localStorage
    localStorage.removeItem("accessibility-settings");
    
    // We need to reload the page to restore animations properly
    window.location.reload();
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
