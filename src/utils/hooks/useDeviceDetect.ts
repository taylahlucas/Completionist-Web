import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return { isMobile };
};

export default useDeviceDetect;
