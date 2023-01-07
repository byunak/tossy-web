import React from "react";

const CookieData = () => {
  const storage = localStorage.getItem("cookieConsent");
  const storageAll = localStorage.getItem("cookieConsentAll");

  if (storage) {
    return <></>;
  } else if (storageAll) {
    return <></>;
  }
};

export default CookieData;
