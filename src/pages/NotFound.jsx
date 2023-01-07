import React from "react";
import { Link } from "react-router-dom";
import Error from "../images/ErrorTV.svg";

const NotFound = () => {
  return (
    <>
      <div className="bg-main w-full h-[calc(100vh-96px)] lg:h-[490px] lg:p-0 pt-16 -mt-9 mb-10">
        <div className="flex flex-col w-10/12 justify-center items-center mx-auto pb-16">
          <div className="w-11/12 lg:w-full mx-auto flex justify-center">
            <img src={Error} alt="$$$$$" className="lg:w-4/12" />
          </div>
          <p className="block lg:hidden font-crimson font-normal text-2xl sm:text-4xl text-center text-third w-11/12 sm:w-8/12 mt-2 sm:mt-8">
            Hop! Sanırım yanlış yere geldin çünkü burası bir yer değil !?
          </p>
          <Link
            to="/"
            className="block lg:hidden bg-third rounded-md font-worksans font-normal text-xs sm:text-lg text-main text-center px-4 py-3 sm:mt-10 mt-6"
          >
            Ana Sayfaya<br></br> Dön
          </Link>
        </div>
      </div>
      <p className="hidden lg:block font-crimson font-normal text-4xl text-main text-center w-4/12 mx-auto mt-20 mb-44">
        Haydaa! Sanırım yanlış yere geldin, çünkü böyle bir sayfa yok :(
      </p>
    </>
  );
};

export default NotFound;
