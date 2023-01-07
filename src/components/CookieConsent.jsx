import React, { useState } from "react";
import Cookie from "../images/Cookie.svg";

function CookieConsent() {
  // Check if the user has already accepted the cookies
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(
    localStorage.getItem("cookieConsent") === "true"
  );
  const [isCookieConsentGivenAll, setIsCookieConsentGivenAll] = useState(
    localStorage.getItem("cookieConsentAll") === "true"
  );

  // Hide the banner if the user has already accepted the cookies
  if (isCookieConsentGiven || isCookieConsentGivenAll) {
    return null;
  }

  // Function to handle the user's cookie preference
  const handleCookieConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsCookieConsentGiven(true);
  };
  const handleCookieConsentAll = () => {
    localStorage.setItem("cookieConsentAll", "true");
    setIsCookieConsentGivenAll(true);
  };

  return (
    <div className="bg-black bg-opacity-60 h-full absolute w-full z-40 ">
      <div className="bg-white min-[380px]:w-8/12 min-[280px]:w-full overflow-auto lg:w-4/12 h-4/6 md:h-5/6 lg:h-4/6 my-auto mx-auto fixed inset-0 rounded">
        <div className="flex flex-col w-10/12 mx-auto mt-7 lg:mt-10">
          <img
            src={Cookie}
            alt="$$$$$"
            className="w-3/12 lg:w-2/12 self-center"
          />
          <p className="font-worksans font-normal min-[380px]:text-sm min-[280px]:text-xs md:text-xl lg:text-lg text-main text-center mt-6">
            Sitemizde geçirdiğiniz süreyi daha güvenli, kaliteli ve keyifli hale
            getirebilmek için bir takım çerezler kullanıyoruz. Sitenin kullanımı
            için zorunlu olmayan çerezleri reddedebilirsiniz. Çerezler ile
            alakalı Aydınlatma Metni’ne buradan ulaşabilirsiniz.
            <br></br>
            <br></br>
            Reddettiğiniz çerezler israf edilmez ve ihtiyaç sahiplerine
            dağıtılır.
          </p>
          <button
            className="bg-main rounded-md self-center py-2 px-1 w-7/12 lg:w-6/12 font-worksans font-normal min-[380px]:text-sm min-[280px]:text-xs md:text-xl lg:text-lg text-white mt-7"
            onClick={() => handleCookieConsentAll()}
          >
            Bütün Çerezleri <br></br> Onaylıyorum
          </button>
          <button
            className="font-worksans font-normal min-[380px]:text-sm min-[280px]:text-xs md:text-xl lg:text-lg text-main underline mt-6"
            onClick={() => handleCookieConsent()}
          >
            Sadece zorunlu çerezleri onaylıyorum
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
