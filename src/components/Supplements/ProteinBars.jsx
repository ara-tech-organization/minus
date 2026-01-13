import React, { useState, useEffect, useRef } from 'react';
import styles from './ProteinBars.module.css';

// Import images
import peanutButter from "../../assets/peanut-butter.png";
import cookiesCream from "../../assets/cookies-cream.png";
import mixBerries from "../../assets/mix-berries.png";
import coffeeCaramel from "../../assets/coffee-caramel.png";
import chocolateBrownie from "../../assets/chocolate-brownie.png";
import glutathione from "../../assets/glutathione.png";
import acvCola from "../../assets/acv-cola.png";
import acvWatermelon from "../../assets/acv-watermelon.png";
import acvGreenApple from "../../assets/acv-green-apple.png";
import greenDetoxHoney from "../../assets/green-detox-honey.png";
import blueberryGummies from "../../assets/blueberry-gummies.png";
import greenDetoxOrange from "../../assets/green-detox-orange.png";
import mangoGummies from "../../assets/mango-gummies.png";
import strawberryGummies from "../../assets/strawberry-gummies.png";

const ProteinBars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const products = [
    { id: 1, name: 'PEANUT BUTTER PROTEIN BAR', price: '₹175.00', image: peanutButter },
    { id: 2, name: 'COOKIES & CREAM PROTEIN BAR', price: '₹175.00', image: cookiesCream },
    { id: 3, name: 'MIX BERRIES PROTEIN BAR', price: '₹175.00', image: mixBerries },
    { id: 4, name: 'COFFEE & CARAMEL PROTEIN BAR', price: '₹175.00', image: coffeeCaramel },
    { id: 5, name: 'CHOCOLATE BROWNIE PROTEIN BAR', price: '₹175.00', image: chocolateBrownie },
    { id: 6, name: 'GLUTATHIONE 600MG & VITAMIN C 40MG STRAWBERRY FLAVOURED EFFERVESCENT TABS', price: '₹1,099.00', image: glutathione },
    { id: 7, name: 'APPLE CIDER VINEGAR COLA FLAVOURED EFFERVESCENT TABS', price: '₹499.00', image: acvCola },
    { id: 8, name: 'APPLE CIDER VINEGAR WATERMELON FLAVOURED EFFERVESCENT TABS', price: '₹499.00', image: acvWatermelon },
    { id: 9, name: 'APPLE CIDER VINEGAR GREEN APPLE FLAVOURED EFFERVESCENT TABS', price: '₹175.00', image: acvGreenApple },
    { id: 10, name: 'GREEN DETOX HONEY, LEMON & GINGER FLAVOURED EFFERVESCENT TABS', price: '₹499.00', image: greenDetoxHoney },
    { id: 11, name: 'BLUEBERRY FLAVOURED NATURAL BIOTIN GUMMIES WITH VITAMIN C, E & ZINC', price: '₹749.00', image: blueberryGummies },
    { id: 12, name: 'GREEN DETOX ORANGE FLAVOURED EFFERVESCENT TABS', price: '₹499.00', image: greenDetoxOrange },
    { id: 13, name: 'MANGO FLAVOURED NATURAL BIOTIN GUMMIES WITH VITAMIN C, E & ZINC', price: '₹749.00', image: mangoGummies },
    { id: 14, name: 'STRAWBERRY FLAVOURED NATURAL BIOTIN GUMMIES WITH VITAMIN C, E & ZINC', price: '₹749.00', image: strawberryGummies }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (isMobile) {
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 3000); // Auto-slide every 3 seconds

      return () => {
        if (autoSlideRef.current) {
          clearInterval(autoSlideRef.current);
        }
      };
    }
  }, [isMobile, products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 3000);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  return (
    <div className={styles.container}>
   
      
      <div className={styles.content}>
        <h1 className={styles.title}>Protein Bars</h1>
        
        {isMobile ? (
          <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper} ref={sliderRef}>
              <div 
                className={styles.sliderTrack}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={product.id} className={styles.slide}>
                    <div className={styles.productCard}>
                      <div className={styles.imageWrapper}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className={styles.productImage}
                        />
                      </div>
                      
                      <div className={styles.productInfo}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        
                        <div className={styles.priceRow}>
                          <span className={styles.price}>{product.price}</span>
                          <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`} onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button className={`${styles.sliderArrow} ${styles.sliderArrowRight}`} onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.sliderDots}>
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={styles.productCard}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={styles.productImage}
                  />
                </div>
                
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{product.price}</span>
                    <button className={styles.addToCartBtn}>ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProteinBars;