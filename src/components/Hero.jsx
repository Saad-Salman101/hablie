import styles from "../style";
import { discount, robot, card } from "../assets";
import GetStarted from "./GetStarted";
// import Carousel from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import required styles
// import imgss from '../assets/uiux.jpg'
import { Fade } from 'react-slideshow-image';
const images = [
  card,
  'https://media.istockphoto.com/id/1004293892/photo/night-streets.jpg?s=612x612&w=0&k=20&c=q_l2uN6mRLHW90k_3suiLqk69MQho6qJQuaMXC6uMhQ=',
  robot,
];

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            {/* <span className="text-white">20%</span> Discount For{" "} */}
            <span className="text-white" >HABILE | HOUSE OF PERIPHERAL</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Elevating Tech <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Possibilities, </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Seamlessly Integrated
        </h1>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        At Habile House of Peripherals, we are your one-stop destination for comprehensive hardware and software solutions. With a rich array of services spanning from expert repairs to cutting-edge software development, including ERP solutions and pioneering edge technologies, we empower businesses with seamless technological advancement.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} h-[100px] md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <Fade
        className='flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative'
      arrows={false} // Hide arrows if desired
      dots={false} // Hide dots if desired
      autoplay={true} // Enable autoplay
      infinite={true} // Enable infinite loop
      transitionDuration={1000} // Adjust transition duration (in milliseconds)
      duration={200} // Adjust display duration (in milliseconds)
      // Other customization options
    >
      {images.map((image) => (
        <div className="flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative bg-green-600" key={image}>
          <img className=" w-100px" src={image} alt="Popping Image" />
        </div>
      ))}
    </Fade>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
