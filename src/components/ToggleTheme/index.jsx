import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleTheme = () => {
  const [isDia, setIsDia] = useState(true);

  const handleToggle = () => {
    setIsDia(!isDia);
    document.querySelector('html').classList.toggle('dark');
    window.localStorage.setItem('theme', isDia ? 'dark' : false);
  };
  
  useEffect(() => {
    return () => {
      const theme = window.localStorage.getItem('theme');
      if (theme === 'dark') {
        setIsDia(false);
        document.querySelector('html').classList.add('dark');
      }else{
        setIsDia(true);
        document.querySelector('html').classList.remove('dark');
      }
    };
  }, []);

  return (
    <div>
      {!isDia ? <FiSun color="var(--bs-primary)" size={25} onClick={handleToggle} /> : <FiMoon className='titleColor' size={25} onClick={handleToggle} />}
    </div>
  );
};

export default ToggleTheme;