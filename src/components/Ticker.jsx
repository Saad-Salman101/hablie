// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { clients } from "../constants";
import { adamjee, afreen, afroze, amarant, anabatla, bakeParlor, brookes, captain, enar, gulf, hirani, ics, IIL, ird, iroots, kidney, kn, lucky, mapple, maymar, mehran, mustaqeem, omi, otsuka, paragon, PPP, SAPT, tabros, tufail, unibro, uniferoze, union } from "../assets/ticker";



const Ticker = () => {
  const containerVariants = {
    start: {
      x: "110%", // Initial position outside the container
    },
    end: {
      x: "-400%", // Final position outside the container
    },
  };

  const itemVariants = {
    start: {
      x: "100%", // Initial position outside the container
    },
    end: {
      x: "0%", // Final position outside the container
    },
  };

  const transition = {
    type: "tween",
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    duration: 40, // Adjust the duration based on your preference
  };

  return (
    <div className="">
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      exit="start"
      transition={transition}
      style={{ width: "100%",overflow:'visible', display:'flex'}}
    >
               <img src={adamjee} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={afreen} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={amarant} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={anabatla} alt="client_logo" className=  "mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={brookes} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={captain} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={enar} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={gulf} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={hirani} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={ics} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={IIL} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={ird} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={iroots} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={kidney} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={lucky} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={mapple} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={mehran} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={maymar} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={mustaqeem} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={omi} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={tabros} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={tufail} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={uniferoze} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={union} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={afroze} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={bakeParlor} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={kn} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={otsuka} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={paragon} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={PPP} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={SAPT} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={unibro} alt="client_logo" className=" mx-3 sm:w-[192px] w-[100px] h-[100px] object-contain" />

      {/* <motion.div
          
            variants={itemVariants}
            initial="start"
            animate="end"
            exit="start"
            transition={transition}
            style={{ display: "flex", margin: "0 10px" }}
          >
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
               <img src={adamjee} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
          </motion.div> */}

     {/* {clients.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="start"
            animate="end"
            exit="start"
            transition={transition}
            style={{ display: "inline-block", margin: "0 10px" }}
          >
               <img src={item.logo} alt="client_logo" className="sm:w-[192px] w-[100px] h-[100px] object-contain" />
          </motion.div>
        ))} */}
        
     
 
    </motion.div>
    </div>
  );
};

export default Ticker;
