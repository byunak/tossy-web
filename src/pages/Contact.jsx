import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import TossyImage from "../images/TossyImage.svg";
import Input from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";

const Contact = () => {
  const [value, setValue] = useState();
  const phoneNumCheck = document.getElementById("phoneNumCheck");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(value)) {
      phoneNumCheck.removeAttribute("hidden", "true");
    } else {
      return phoneNumCheck.setAttribute("hidden", "true");
    }

    // if i dont get hs on console so it can be sent
    console.log("hs");
  };

  return (
    <>
      <div className="h-80 lg:h-96 bg-main w-full flex pt-10">
        <img src={TossyImage} alt="$$$$$" className="w-11/12 mx-auto" />
      </div>

      <div className="hidden lg:flex flex-col w-7/12 items-center mx-auto text-center mt-14">
        <h1 className="font-crimson font-bold text-4xl text-main">İletişim</h1>
        <h2 className="font-worksans font-bold text-base tracking-[5px] text-alternative mt-4">
          MERHABA!
        </h2>
        <p className="font-worksans font-normal text-xl text-main mt-4">
          Partnerlik, yatırım, kariyer, fuar ve benzeri konular için
          sorularınız; partnerlerimiz, kullanıcılarımız, personellerimiz,
          uygulamamız ile alakalı şikayetleriniz ve/veya önerileriniz var ise
          lütfen bize ulaşın. Dünyayı ve cüzdanınızı korurken, sizi memnun
          tutmak bizim için çok önemli.
        </p>
      </div>

      <div className="lg:flex lg:flex-row lg:mt-44 lg:mb-96 lg:bg-secondary lg:bg-opacity-60 relative">
        {/* Items */}
        <div className="flex flex-col items-start w-7/12 lg:w-2/12 mx-auto lg:mx-0 lg:ml-72 sm:ml-72 text-main font-crimson mt-14 lg:mt-32">
          {/* */}
          <div className="flex flex-col">
            <div className="flex flex-row">
              <BsTelephone size={30} />
              <span className="font-semibold text-3xl sm:text-5xl lg:text-3xl ml-3">
                Telefon
              </span>
            </div>
            <span className="font-normal text-xl sm:text-3xl lg:text-xl mt-4">
              +90 530 515 5162
            </span>
          </div>

          {/* */}
          <div className="flex flex-col mt-20">
            <div className="flex flex-row">
              <IoLocationSharp size={30} />
              <span className="font-semibold text-3xl sm:text-5xl lg:text-3xl ml-3">
                Adres
              </span>
            </div>
            <span className="font-normal text-xl sm:text-3xl lg:text-xl mt-4">
              Molla Fenari Mahallesi,
              <br></br>
              Ahmet Taner Kışlalı Cd.
              <br></br>
              No:3, 34116 Fatih/İstanbul
            </span>
          </div>

          {/* */}
          <div className="flex flex-col mt-20 lg:mb-32">
            <div className="flex flex-row">
              <IoMailOutline size={30} />
              <span className="font-semibold text-3xl sm:text-5xl lg:text-3xl ml-3">
                E-posta
              </span>
            </div>
            <span className="font-normal text-xl sm:text-3xl lg:text-xl mt-4">
              info@tossy.app
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center w-11/12 lg:w-6/12 mx-auto mt-28 lg:-mt-16 lg:px-16 lg:pt-16 lg:absolute lg:bg-white lg:right-24 lg:shadow-[0_4px_60px_rgba(0,0,0,0.3)]">
          <h1 className="font-crimson font-bold text-3xl sm:text-5xl lg:text-4xl lg:self-start text-main">
            Bize Ulaşın
          </h1>
          <h2 className="block lg:hidden font-worksans font-bold text-base tracking-[5px] text-alternative mt-4">
            İLETİŞİM FORMU
          </h2>
          <p className="hidden lg:block text-worksans font-normal text-lg text-gray-400 w-11/12 self-start mt-4">
            Bütün soru, şikayet ve önerilerimiz bizim için çok önemli ve hepsi
            ile ivedilik ile ilgileneceğimize söz veriyoruz.
          </p>

          {/* Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            {/* İsim */}
            <div className="relative z-0 w-full mb-8 group mt-28">
              <input
                type="text"
                minLength={6}
                maxLength={60}
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-lg font-worksans font-medium text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                İsim *
              </label>
            </div>

            {/* E-posta */}
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="email"
                minLength={11}
                maxLength={90}
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-lg font-worksans font-medium text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                E-posta *
              </label>
            </div>

            {/* Telefon */}
            <div className="relative z-0 w-full mb-8 group">
              <Input
                type="tel"
                minLength={14}
                maxLength={14}
                name="floating_tel"
                id="floating_tel"
                country="TR"
                value={value}
                onChange={setValue}
                error={
                  value
                    ? isValidPhoneNumber(value)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_tel"
                className="peer-focus:font-medium absolute text-lg font-worksans font-medium text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Telefon *
              </label>
              <span
                hidden
                className="font-worksans font-normal text-base text-red-500"
                id="phoneNumCheck"
              >
                Numaranızı 0___-___-__-__ formatına uygun giriniz.
              </span>
            </div>

            {/* Mesajınız */}
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                minLength={10}
                maxLength={200}
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-lg font-worksans font-medium text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mesajınız *
              </label>
            </div>

            {/* Captcha */}
            <div className="relative z-0 w-full mb-8 group mt-16">
              <input
                type="text"
                maxLength={10}
                name="floating_text"
                id="floating_text"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_text"
                className="peer-focus:font-medium absolute text-lg font-worksans font-medium text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                7 - 2 = ?
              </label>
            </div>
            <button
              type="submit"
              className="mb-24 lg:mb-10 mt-16 bg-main font-worksans font-medium text-lg text-white py-4 px-14"
            >
              Form Gönder
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
