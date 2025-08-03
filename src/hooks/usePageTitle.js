import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | World Atlas`;
  }, [title]);
};

export default usePageTitle;