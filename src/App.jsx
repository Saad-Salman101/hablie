import React, { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  // Assuming Services and ServicesHardware are your component imports
} from "./components";
import Ticker from "./components/Ticker";
import Services from "./components/Services";
import ServicesHardware from "./components/ServicesHardware";
import ContactUs from "./components/ContactUs";
import ReactRain from 'react-rain-animation';

// import all the styles
import "react-rain-animation/lib/style.css";
import { minionsworking, minionsworking2 } from "./assets";
import Rain from "./components/Rain";
import LightBulb from "./components/Bulb";



const App = () => {
  const { scrollYProgress } = useViewportScroll();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // State to trigger re-animation

  useEffect(() => {
    const unsubscribeScroll = scrollYProgress.onChange(setScrollPosition);
    return () => {
      unsubscribeScroll();
    };
  }, [scrollYProgress]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the key to trigger re-animation
      setAnimationKey(prevKey => prevKey + 1);
    }, 5000); // 5 seconds interval for demonstration

    return () => clearInterval(interval);
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => ({
      char,
      key: `${char}-${index}`,
    }));
  };

  // For "Software Services"
  const softwareLetters = splitText("Software Services");

  // For "Hardware Services"
  const hardwareLetters = splitText("Hardware Services");

  const letterAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  
    // Animation settings for reveal effect
    const revealAnimation = {
      initial: { y: 30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    };
  
    // Custom transition settings
    const transition = {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    };

    const [bulb, setbulb] = useState(false)
      useEffect(() => {
    // Set up an interval to toggle the light on every 10 seconds
    const interval = setInterval(() => {
      setbulb(true)

      // Set up a timeout to turn the light off after 5 seconds
      const timeout = setTimeout(() => {
        setbulb(false)
      }, 15000);

      return () => clearTimeout(timeout);
    }, 18000);

    // Clean up the interval when the component is unmounted or the interval is reset
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
          {/* Scroll progress bar */}
          <motion.div
            className="fixed top-0 left-0 h-3 bg-blue-500 z-50"
            style={{
              width: "100%",
              scaleX: scrollPosition,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollPosition }}
            transition={{ duration: 0.2 }}
          />

            <Rain />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Ticker />
          {/* Animated "Software Services" Text */}
          <div className="w-full text-center my-4 text-white text-[50px] font-extrabold" key={`software-${animationKey}`}>
            {softwareLetters.map(({ char, key }) => (
              <motion.span
                key={key}
                variants={letterAnimation}
                initial="initial"
                animate="animate"
                transition={{ type: "spring", stiffness: 100, delay: key.includes(' ') ? 0 : 0.1 * parseInt(key.split('-')[1]) }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <Rain />
          <motion.div variants={revealAnimation} initial="initial" animate="animate" exit="exit" transition={{ ...transition, delay: 0.2 }}>
            <Services />
          </motion.div>

          {/* Animated "Hardware Services" Text */}
          <div className="w-full flex text-center my-4 text-white text-[50px] font-extrabold" key={`hardware-${animationKey}`}>
          <div className="">
          </div>
            {hardwareLetters.map(({ char, key }) => (
              <motion.span
              key={key}
              variants={letterAnimation}
              initial="initial"
              animate="animate"
              transition={{ type: "spring", stiffness: 100, delay: key.includes(' ') ? 0 : 0.1 * parseInt(key.split('-')[1]) }}
              >
                {char}
              </motion.span>
            ))}
            <div className=" relative">
             <div className="absolute left-20 top-3 z-10"><LightBulb val={bulb} /></div>
            <img src={minionsworking} alt="" className="h-[100px] z-20" />
            </div>
          </div>
          <ServicesHardware />
          <Business />
          <Billing />
          <CardDeal />
          <motion.div variants={revealAnimation} initial="initial" animate="animate" exit="exit" transition={{ ...transition, delay: 0.2 }}>
          <ContactUs />
          <div className=" relative">
             <div className="absolute left-20 top-3 z-10"><LightBulb /></div>
            <img src={minionsworking} alt="" className="h-[100px] z-20" />
            </div>
          </motion.div>
          <Testimonials />
          
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
