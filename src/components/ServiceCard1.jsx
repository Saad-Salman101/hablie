/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { quotes } from "../assets";

const ServiceCard = ({ content, img }) => (
  <div className="0 justify-between flex-col px-10 py-6   max-w-[670px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-xl">
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[100%] h-[400px] " />
      {/* <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div> */}
    </div>

    <p className="font-poppins font-normal text-[12px] sm:text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

  </div>
);


export default ServiceCard;
