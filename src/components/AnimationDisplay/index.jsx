import { motion } from 'framer-motion';
import { InView  } from 'react-intersection-observer';

const AnimateDisplay = ({ direction = 'top', delay=0.5, children , className }) => {
    const getInitial = () => {
      switch (direction) {
        case 'top':
          return { opacity: 0, y: -50 };
        case 'right':
          return { opacity: 0, x: -50 };
        case 'bottom':
          return { opacity: 0, y: 50 };
        case 'left':
          return { opacity: 0, x: 50 };
        default:
          return { opacity: 0, y: -50 }; 
      }
    };
  
    const getAnimate = (inView) => {
      switch (direction) {
        case 'top':
          return { opacity: inView ? 1 : 0, y: inView ? 0 : -50 };
        case 'right':
          return { opacity: inView ? 1 : 0, x: inView ? 0 : -50 };
        case 'bottom':
          return { opacity: inView ? 1 : 0, y: inView ? 0 : 50 };
        case 'left':
          return { opacity: inView ? 1 : 0, x: inView ? 0 : 50 };
        default:
          return { opacity: inView ? 1 : 0, y: inView ? 0 : -50 };
      }
    };
  
    return (
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className={className}
            initial={getInitial()}
            animate={getAnimate(inView)}
            exit={{ opacity: 0 }}
            transition={{ duration: delay  }}
          >
            {children}
          </motion.div>
        )}
      </InView>
    );
};
  
export default AnimateDisplay;