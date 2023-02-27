import Logo from "@/assets/Logo.png";
import {PhoneIcon, HomeIcon} from '@heroicons/react/24/solid'
import {AiFillInstagram, AiFillFacebook,AiFillYoutube} from 'react-icons/ai'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-blue-20 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className=" basis-1/2 md:mt-0">
          <img alt="logo" className="w-32 h-32 mb-5"  src={Logo} />
          {/* <p className="my-5">
          At our dance class, we're dedicated to helping you unleash your inner dancer and achieve 
          your fitness goals. Join us today and let's dance our way to a healthier, happier you!
          </p> */}
          <p>©Creative Edge - All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/creativeedgedanceco/" className="my-5 flex items-center cursor-pointer"> <span className="text-xl mr-2  "><AiFillInstagram /> </span> Instagram</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Cedanceco"  className="my-5 flex items-center cursor-pointer"><span className="text-xl mr-2  "><AiFillFacebook /> </span> Facebook</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@pushpushkar"  className="my-5 flex items-center cursor-pointer"><span className="text-xl mr-2  "><AiFillYoutube /></span> Youtube</a>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/msqYQXpysZFGpaFW7" className="my-5 flex items-start"><span><HomeIcon className="h-5 w-5 mr-2"  /></span> 42/14-A, Devarajanar St, Vedachalam Nagar, Tamil Nadu - 603001</a>
          <p className="flex items-center"> <span><PhoneIcon className="h-5 w-5 mr-2" /></span> +91 9791841431</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;