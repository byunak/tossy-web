import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-32">
      <div className="bg-main h-full flex flex-col sm:flex-row sm:justify-around justify-center items-center text-white text-lg sm:text-2xl lg:text-lg">
        <div className="flex flex-row">
          <Link to="placeholder" className="mr-5">
            <FaFacebookF />
          </Link>
          <Link to="placeholder" className="mr-5">
            <FaInstagram />
          </Link>
          <Link to="placeholder" className="mr-5">
            <FaTwitter />
          </Link>
          <Link to="placeholder" className="mr-5">
            <FaPinterestP />
          </Link>
          <Link to="placeholder" className="mr-5">
            <FaTiktok />
          </Link>
          <Link to="placeholder" className="mr-5">
            <FaWhatsapp />
          </Link>
          <Link to="placeholder">
            <FaYoutube />
          </Link>
        </div>

        <div className="font-worksans font-normal text-lg sm:text-2xl lg:text-lg mt-5 sm:mt-0">
          © Tossy, 2023. Tüm hakları saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
