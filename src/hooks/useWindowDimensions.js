import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerHeight);

  useEffect(() => {
    const listener = window.addEventListener('resize', (e) => {
      setWidth(e.target.innerWidth);
      setHeight(e.target.innerHeight);
    })

    return () => window.removeEventListener('resize', listener);
  }, []);


  return {
    width,
    height
  }
}

export default useWindowDimensions;