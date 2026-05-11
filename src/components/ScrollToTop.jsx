
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300 hover:scale-110 transition-all duration-300 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #f43f5e, #ec4899)',
          }}
        >
          <ArrowUp size={22} className="text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;