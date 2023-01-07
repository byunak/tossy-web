import React, { useState } from "react";
import Vector5 from "../images/Vector5.svg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CareerData from "../components/CareerData";

const Career = () => {
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
      <CareerData />
    </>
  );
};

export default Career;
