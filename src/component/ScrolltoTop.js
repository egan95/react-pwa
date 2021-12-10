import React, { useEffect, useState } from 'react'

function ScrolltoTop() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

      useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);

    return (
        <>
        {isVisible && 
          <a onClick={scrollToTop} href="#" className="back-to-top d-flex align-items-center justify-content-center active"><i className="bi bi-arrow-up-short"></i></a>  
        }
        </>
    )
}

export default ScrolltoTop
