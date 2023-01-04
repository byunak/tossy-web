import React from "react";
import Vector5 from "../images/Vector5.svg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CardData } from "../components/CareerCardData.jsx";

const Career = () => {
  {
    /* Card */
  }
  const cardList = CardData.map((card) => {
    return (
      <div
        className="w-10/12 flex flex-col lg:w-5/12 lg:flex-row lg:justify-between lg:items-center lg:py-5 lg:px-10 gap-5 pr-4 pb-4 bg-main rounded-xl mx-auto mt-4 mb-2"
        key={card.id}
      >
        <h1 className="font-worksans font-normal text-xl sm:text-3xl lg:text-xl lg:m-0 text-white mt-7 ml-7">
          {card.job}
        </h1>

        <div className="flex flex-row ml-7 lg:m-0">
          <IoLocationSharp color="white" size={22} />
          <span className="font-worksans font-normal text-lg sm:text-2xl lg:text-lg text-white ml-4">
            {card.town}
          </span>
        </div>

        <Link
          to="basvur"
          className="py-3 self-end w-6/12 lg:w-2/12 bg-secondary rounded-xl font-worksans font-normal text-base sm:py-5 sm:text-2xl lg:py-3 lg:text-base text-center text-third"
        >
          Başvur
        </Link>
      </div>
    );
  });

  return (
    <>
      {/* Img */}
      <div className="bg-main flex justify-center h-96 sm:h-[490px] lg:relative">
        <img
          src={Vector5}
          alt="$$$$$"
          className="w-11/12 px-2 lg:w-[680px] lg:absolute"
        />
      </div>

      {/* Merhaba */}
      <div className="flex flex-col text-center items-center w-10/12 mx-auto mt-14 lg:mt-48">
        <h1 className="font-crimson font-bold text-4xl sm:text-5xl lg:text-4xl text-main">
          Kariyer
        </h1>
        <h2 className="font-worksans font-bold text-base sm:text-xl lg:text-base text-alternative tracking-[5px] mt-4">
          MERHABA!
        </h2>
        <p className="w-10/12 font-worksans font-medium text-lg lg:text-base text-main mt-4">
          Tossy'da çalışmaya katılın ve doğaya yardımcı olun!
          <br></br>
          <br></br>
          Tossy, yiyeceklerin atılımını azaltmayı ve çevreyi korumanın yollarını
          arayan bir hibrid web-mobile uygulamadır.
          <br></br>
          <br></br>
          Uygulamamız, kullanıcılarımızın yerel restoranlar, pazarlar, kafeler
          ve buffetlerden ürünlerin ömrünü tamamlamış veya kalan yiyecekleri
          rezerve etmelerine ve almalarına olanak sağlar.
          <br></br>
          <br></br>
          Partnerlerimiz, uygulamamızın ana sayfasında listelenecek ve
          kullanıcılarımız, konumlarına göre partnerleri filtreleyebilecek ve
          arayabileceklerdir.
          <br></br>
          <br></br>
          Partnerlerimiz, uygulamamız üzerinden kalan yiyeceklerini
          listeleyebilecek ve kullanıcılarımız, listelenen fiyatı ödeyerek ve
          bizim komisyonumuzu ekleyerek satın alabileceklerdir.
          <br></br>
          <br></br>
          Eğer siz de Tossy ailesine katılmak ve doğayı koruma konusunda önemli
          bir rol oynamak istiyorsanız, lütfen "İş Fırsatları" sayfamızı ziyaret
          edin ve açık pozisyonlar için başvurun!
          <br></br>
          <br></br>
          Tossy'da çalışmak, hem kendi geleceğinizi inşa etmenize yardımcı
          olacak hem de dünyayı daha iyi bir yer haline getirmeye katkıda
          bulunacaksınız. İşte bu yüzden Tossy'da çalışmaya katılın ve doğaya
          yardımcı olun!
        </p>
      </div>

      {/* Açık Pozisyonlar */}
      <h1 className="font-crimson font-bold text-4xl text-center text-main mt-14">
        Açık Pozisyonlar
      </h1>

      {/* Card List */}
      <div className="mb-20">{cardList}</div>
    </>
  );
};

export default Career;
