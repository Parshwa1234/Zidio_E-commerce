import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-black items-center">
        <div className="mx-auto w-[30%] border-[1px] border-white my-5"></div>
        <div className=" flex w-[75%] p-4 h-auto justify-around">
          {/* Contact Us */}
          <div className="flex flex-col  p-4">
            <div className="text-3xl font-semibold mb-2">Contact Us</div>
            <div className="text-[14px]">
              <div>Contact Number : +91 XXXXX-XXXXX</div>
              <div>E-mail : Trashtalk_zidio@gmail.com</div>
            </div>
          </div>

          {/* Privacy policy stuff */}
          <div className="flex flex-col p-4">
          <div className="text-3xl font-semibold mb-2">General</div>
            <div className="text-[14px]">
              <div>Privacy policy</div>
              <div>Terms and conditions</div>
              <div>Return and refund policy</div>
              <div>FAQs</div>
              <div>Shop</div>
            </div>
          </div>

          {/* Address and socials */}
          <div className="flex flex-col p-4">
          <div className="text-3xl font-semibold mb-2">Address</div>
            <div className="text-[14px]">
              Lorem ipsum dolor sit amet consectetur 
              <br />adipisicing elit. Dolorem, neque.
            </div>
            <div className="flex mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl mr-3 transition-transform duration-300 transform 
              hover:scale-125">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl mr-3 transition-transform duration-300 transform 
              hover:scale-125">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl mr-3 transition-transform duration-300 transform 
              hover:scale-125">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl mr-3 transition-transform duration-300 transform 
              hover:scale-125">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
