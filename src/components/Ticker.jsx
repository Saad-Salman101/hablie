// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { clients } from "../constants";



const Ticker = () => {
  const containerVariants = {
    start: {
      x: "80%", // Initial position outside the container
    },
    end: {
      x: "-90%", // Final position outside the container
    },
  };

  const itemVariants = {
    start: {
      x: "0%", // Initial position outside the container
    },
    end: {
      x: "100%", // Final position outside the container
    },
  };

  const transition = {
    type: "tween",
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
    duration: 10, // Adjust the duration based on your preference
  };

  return (
    <div className="">
    <motion.div
      variants={containerVariants}
      initial="start"
      animate="end"
      exit="start"
      transition={transition}
      style={{ width: "100%", overflow: "hidden", whiteSpace: "nowrap"}}
    >
     {clients.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="start"
            animate="end"
            exit="start"
            transition={transition}
            style={{ display: "inline-block", margin: "0 10px" }}
          >
               <img src={item.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
          </motion.div>
        ))}
        
     
 
    </motion.div>
    </div>
  );
};

export default Ticker;
