import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
  useEffect(() => {
    if (__PROJECT__ === 'frontend') {
      callback();
    }
    // eslint-disable-next-line
  }, []);
}
