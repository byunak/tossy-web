import React from "react";
import { Link } from "react-router-dom";
import TossyImage from "../images/TossyImage.svg";
import Vector1 from "../images/Vector1.svg";
import Vector2 from "../images/Vector2.svg";

const Home = () => {
  return (
    <>
      {/* IMAGE */}
      <div className="w-full flex flex-wrap min-[380px]:h-[calc(100vh-96px)] lg:h-[490px] bg-main pb-3">
        <div className="w-full flex justify-center lg:w-7/12 lg:justify-end lg:order-1 pt-2">
          <img
            src={TossyImage}
            alt="$$$$$"
            className="w-11/12 lg:w-9/12 lg:h-5/6 mx-auto"
          />
        </div>

        {/* CONTENT1 */}
        <div className="font-worksans font-bold text-base sm:text-xl lg:text-base text-white mt-8 w-full lg:mt-14 lg:w-5/12">
          <div className="flex flex-col flex-wrap mx-auto w-11/12 lg:w-9/12">
            <h2 className="tracking-[5px] ">HOŞGELDİNİZ!</h2>
            <h1 className="font-crimson text-2xl sm:text-4xl lg:text-2xl leading-10 mt-4 sm:mt-7 lg:mt-4">
              Hem gezegeni ,<br></br> hem cüzdanını koru
            </h1>
            <p className="font-worksans font-normal text-lg sm:text-2xl lg:text-lg text-white text-opacity-75 mt-3 sm:mt-6 lg:mt-4">
              Tossy ile Türkiye'de gıda israfını azaltın ve maddi tasarruf edin.
              Partner restoranlarımızdan ürünleri veya tüketilemeyen yiyecekleri
              rezerve edip alın. Çevre dostu yiyecek seçenekleriyle birlikte
              gıda israfına karşı savaşın.
            </p>
            <Link
              to="kesfet"
              className="bg-white rounded-md font-worksans font-normal text-xl sm:text-2xl lg:text-xl text-center text-main w-6/12 py-3 sm:py-6 lg:py-3 mt-10 sm:mt-16 lg:mt-10"
            >
              Keşfet
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENT2 */}
      <div className="w-full flex flex-col items-center sm:mt-20 lg:mt-10 font-bold ">
        <h1 className="font-worksans text-base sm:text-xl lg:text-base tracking-[5px] text-secondary mt-8">
          PARTNERLİK
        </h1>
        <h2 className="font-crimson text-2xl sm:text-4xl lg:text-2xl text-main mt-4">
          Partnerlerimiz arasına katılın
        </h2>
        <div className="font-worksans font-normal text-xl sm:text-3xl lg:text-xl sm:text-center text-main px-10 mt-4">
          <p className="hidden lg:block">
            Anlaşmalı lokasyonlarımız arasına katılmak, Tossy partnelerine özel
            hizmetlerimizden faydalanmak ve tüketilemeyen yemeklerinizden kâr
            edebilmek için aramıza katılın.
          </p>
          <p className="block lg:hidden">
            Anlaşmalı lokasyonlarımızın arasına katılarak; tüketilemeyen
            yemeklerinizden kâr edin ve avantajlarımızdan faydalanın.
          </p>
        </div>
        <Link
          to="basvur"
          className="bg-main rounded-md font-worksans font-normal text-white text-xl sm:text-3xl lg:text-xl py-3 px-12 sm:py-6 sm:px-24 lg:py-3 lg:px-12 mt-12"
        >
          Başvur
        </Link>
      </div>

      {/**/}
      <div className="w-full mt-11 sm:mt-60 lg:mt-48">
        <div className="flex flex-col lg:flex-row lg:justify-between mx-auto w-10/12">
          <img src={Vector1} alt="$$$$$" />
          <div className="flex flex-col lg:w-5/12 lg:mt-24">
            <h1 className="font-crimson font-bold text-4xl sm:text-6xl lg:text-4xl text-main mt-10">
              Erişilebilir Gıda
            </h1>
            <p className="font-worksans font-normal text-base sm:text-2xl lg:text-base text-main mt-5">
              Tossy ile yiyecekleri rezerve edin ve gıda israfına son verin!
              Partner restoranlarımızdan tüketilemeyen yiyecekleri alın. Maddi
              tasarruf edin ve çevreyi koruyun. Hemen indirin ve katılın!
            </p>

            <Link
              to="kesfet"
              className="bg-main rounded-md font-worksans font-normal text-white text-center text-xl sm:text-3xl lg:text-xl py-3 sm:py-6 lg:py-3 w-6/12 lg:w-5/12 xl:w-3/12 self-center lg:self-start mt-12"
            >
              Keşfet
            </Link>
          </div>
        </div>
      </div>

      {/**/}
      <div className="w-full mt-20 sm:mt-60 lg:mt-48">
        <div className="flex flex-col lg:flex-row lg:justify-between mx-auto w-10/12">
          <img src={Vector2} alt="$$$$$$" className="lg:order-1" />
          <div className="flex flex-col lg:w-5/12 lg:mt-24">
            <h1 className="font-crimson font-bold text-4xl sm:text-6xl lg:text-4xl text-main mt-10">
              Mücadelemize Katılın
            </h1>
            <p className="font-worksans font-normal text-base sm:text-2xl lg:text-base text-main mt-5">
              Gıda israfını azaltan ve uygun fiyatlı yemekler sunan Tossy
              ekibine katılın! Birlikte bir fark yaratalım. Size uygun
              pozisyonlar için tıklayın!
            </p>
            <Link
              to="incele"
              className="bg-main rounded-md font-worksans font-normal text-white text-center text-xl sm:text-3xl lg:text-xl py-3 sm:py-6 lg:py-3 w-6/12 lg:w-3/12 self-center lg:self-start mt-12"
            >
              İncele
            </Link>
          </div>
        </div>
      </div>

      {/**/}
      <div className="w-full flex flex-col text-center items-center mt-20 mb-16 sm:mt-60 sm:mb-40 lg:mt-80 lg:mb-60">
        <h1 className="font-worksans font-bold text-base sm:text-xl lg:text-base tracking-[5px] text-secondary mt-8">
          BİZE ULAŞIN
        </h1>
        <h2 className="font-crimson font-bold text-2xl sm:text-4xl text-main mx-4 mt-4">
          Soru, Şikayet ve Önerileriniz için bize ulaşın
        </h2>
        <div className="font-worksans font-normal text-xl sm:text-3xl lg:text-xl sm:text-center text-main !leading-relaxed px-10 lg:px-48 mt-4">
          <p className="hidden lg:block">
            Partnerlik, yatırım, kariyer, fuar ve benzeri konular için
            sorularınız; partnerlerimiz, kullanıcılarımız, personellerimiz,
            uygulamamız ile alakalı şikayetleriniz ve/veya önerileriniz var ise
            lütfen bize ulaşın. Dünyayı ve cüzdanınızı korurken, sizi memnun
            tutmak bizim için çok önemli.
          </p>
          <p className="block lg:hidden">
            Dünyayı ve cüzdanınızı korurken, sizi memnun tutmak bizim için çok
            önemli. Gelin tanışalım!
          </p>
        </div>
        <Link
          to="formgonder"
          className="bg-main rounded-md font-worksans font-normal text-white text-xl sm:text-3xl lg:text-xl py-3 px-8 sm:py-6 sm:px-20 lg:py-3 lg:px-8 mt-12"
        >
          Form Gönder
        </Link>
      </div>
    </>
  );
};

export default Home;
