
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const title = path.length > 0 ? path[path.length - 1].replace(/-/g, ' ') : 'Home';

  useEffect(() => {
    document.title = title.toUpperCase();
  }, [title]);

  return (
    <h1>{title.toUpperCase()}</h1>
  );
};

export default Title;
