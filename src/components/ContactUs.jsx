import { useState } from "react";
import { firestore } from "../firebase/firebase";
import { addDoc, collection } from 'firebase/firestore';
import { minionsworking, robo2 } from "../assets";

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactNumber1, setContactNumber1] = useState('');
    const [contactNumber2, setContactNumber2] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !email || !contactNumber1) {
        setIsError(true);
        setTimeout(() => {
            setIsError(false);
        }, 3000);
        return;
      }
  const user ={
    name: name,
      email: email,
      companyName: companyName,
      contactNumber1: contactNumber1,
      contactNumber2: contactNumber2,
  }
      try {
        // Store data in Firestore
        // await collection(firestore, 'users').add({
        //     name: name,
        //     email: email,
        //   });
  
        const docRef = await addDoc(collection(firestore, "users"), {
             user,    
          });
          console.log("Document written with ID: ", docRef.id);

        // Clear the input fields after successful submission
        setName('');
        setEmail('');
        setCompanyName('');
        setContactNumber1('');
        setContactNumber2('');
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    };

  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <div className=" w-full text-center my-4 text-white text-[25px] md:text-[50px] font-extrabold">
      Get in Touch (We'll Reach Out)
      </div>
      <div className="text-white justify-between flex-col px-10 py-12 min-w-[300px]  w-[80%] md:mr-10 sm:mr-5 mr-0 my-5 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 rounded-xl">
      <div className=" flex justify-center">
        <div className=" hidden sm:block">
          <img src={robo2} alt="robo" className="h-[400px]" />
        
        </div>
      <form onSubmit={handleSubmit}>
        <div className=" fex flex-col ">
        <label className=" mr-4 text-[18px] md:text-[22px]">
          Name:*
        </label>
          <input className=" w-[200px]h-[30px] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-md text-white border-2 border-black" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        <br />
        <div className=" fex flex-col ">
        <label className="mr-4  text-[18px] md:text-[22px]">
          Email:*
        </label>
          <input type="email" className=" w-[200px] h-[30px] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-md text-white border-2 border-black" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        {/* <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label> */}
        <br />
   
            <div className="flex">
              <label className="mr-4 text-[18px] md:text-[22px]">Company Name:</label>
              <input
                type="text"
                className="xs:w-[200px] w-[100px] h-[30px] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-md text-white border-2 border-black"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <br />
            <div className="flex `">
              <label className="mr-4 text-[18px] md:text-[22px]">Contact Number 1:*</label>
              <input
                type="tel"
                className="xs:w-[200px] w-[100px] h-[30px] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-md text-white border-2 border-black"
                value={contactNumber1}
                onChange={(e) => setContactNumber1(e.target.value)}
              />
            </div>
            <br />
            <div className="flex `">
              <label className="mr-4 text-[18px] md:text-[22px]">Contact Number 2:</label>
              <input
                type="tel"
                className="xs:w-[200px] h-[30px] w-[100px] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 rounded-md text-white border-2 border-black"
                value={contactNumber2}
                onChange={(e) => setContactNumber2(e.target.value)}
              />
            </div>
            <br />
            <div className=" w-full flex justify-center">
                <div className="fle flex-col">
        <button className=" bg-black p-4 rounded-lg" type="submit">Submit</button>
        {isSuccess && (
              <div className="text-green-500 text-[18px] md:text-[22px] mb-4">
                Sent Successfully!
              </div>
            )}
               {isError && (
              <div className="text-red-500 text-[18px] md:text-[22px] mb-4">
                Please fill in all required fields.
              </div>
            )}
            </div>
            </div>
      </form>
    </div>
       
       
        <div className="flex md:flex-row flex-col">
          {/* <img src={img} alt={name} className="w-[100%] h-[400px] " /> */}
          {/* <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div> */}
        </div>

        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          {/* {content} */}
        </p>
      </div>
      );
    </div>
  );
};

export default ContactUs;
