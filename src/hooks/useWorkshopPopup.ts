import { useState, useEffect } from 'react';

interface UseWorkshopPopupOptions {
  delay?: number; // Delay in milliseconds before showing popup
  showOnce?: boolean; // Whether to show only once per session
  enabled?: boolean; // Whether popup is enabled
}

export const useWorkshopPopup = (options: UseWorkshopPopupOptions = {}) => {
  const {
    delay = 3000,
    showOnce = true,
    enabled = true
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Check if popup has been shown before (if showOnce is true)
    const storageKey = 'workshopPopupShown';
    const popupShown = showOnce ? sessionStorage.getItem(storageKey) : null;
    
    if (popupShown && showOnce) {
      setHasShown(true);
      return;
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
      
      if (showOnce) {
        sessionStorage.setItem(storageKey, 'true');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showOnce, enabled]);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Reset popup (useful for testing or manual control)
  const resetPopup = () => {
    setHasShown(false);
    setIsOpen(false);
    sessionStorage.removeItem('workshopPopupShown');
  };

  return {
    isOpen,
    hasShown,
    openPopup,
    closePopup,
    resetPopup
  };
};