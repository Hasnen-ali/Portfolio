import { useState, useEffect } from 'react';

export default function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark);
  }, [dark]);

  return [dark, setDark];
}
