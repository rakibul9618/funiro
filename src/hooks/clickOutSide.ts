import { useEffect } from 'react';

interface UseClick {
  searchMenu: React.RefObject<HTMLDivElement>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useClickOutside = ({ searchMenu: ref, setShowSearch }: UseClick) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setShowSearch]);
};
