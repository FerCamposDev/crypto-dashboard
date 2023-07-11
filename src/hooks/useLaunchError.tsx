import { useEffect } from 'react';
import toast from 'react-hot-toast';

const useLaunchError = (error: Error | null): void => {
  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error?.message]);
};

export default useLaunchError;
