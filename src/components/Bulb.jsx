import { useEffect, useState } from 'react';
import './Bulb.css';

// eslint-disable-next-line react/prop-types
const LightBulb = ({val}) => {
  const [isOn, setIsOn] = useState(false);

//   useEffect(() => {
//     // Set up an interval to toggle the light on every 10 seconds
//     const interval = setInterval(() => {
//         toggleLight()

//       // Set up a timeout to turn the light off after 5 seconds
//       const timeout = setTimeout(() => {
//         toggleLight()
//       }, 1000);

//       return () => clearTimeout(timeout);
//     }, 4000);

//     // Clean up the interval when the component is unmounted or the interval is reset
//     return () => clearInterval(interval);
//   }, []);
useEffect(() => {
if(val === true){
    setIsOn(true)
}else if(val === false){
    setIsOn(false)
}

}, [val])


  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`bulb ${isOn ? 'on' : ''}`} onClick={toggleLight}>
      {/* The bulb */}
    </div>
  );
};

export default LightBulb;
