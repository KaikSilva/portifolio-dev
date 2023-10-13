import { useState, useEffect } from 'react';
import './BotaoVoltarAoTopo.css'; // Arquivo de estilo CSS

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`botao-ao-topo ${isVisible ? 'visivel' : ''}`} onClick={scrollToTop}>
      Voltar ao Topo
    </div>
  );
};

export default ButtonToTop;