import React from "react";
import { Link } from "react-router-dom";
import Vector3 from "../images/Vector3.svg";

const About = () => {
  return (
    <>
      <div className="bg-main flex justify-center h-96 sm:h-[490px]">
        <img src={Vector3} alt="$$$$$" className="w-11/12 px-2" />
      </div>

      <div className="flex flex-col text-center items-center w-10/12 mx-auto mt-14">
        <h1 className="font-crimson font-bold text-4xl sm:text-5xl lg:text-4xl text-main">
          Hakkımızda
        </h1>
        <h2 className="font-worksans font-bold text-base sm:text-xl lg:text-base text-secondary tracking-[5px] mt-4">
          MERHABA
        </h2>
        <div className="font-worksans font-normal text-xl sm:text-2xl lg:text-xl text-main mt-4">
          <p className="mt-10">
            Tossy olarak, yiyeceklerin atılmasını azaltmak ve çevreye yardımcı
            olmak amacıyla kurulmuş bir mobil uygulamayız.
          </p>
          <p className="mt-28">
            Bizim misyonumuz, kullanıcılarımıza uygun fiyatlı yiyecek seçeneği
            sunmak, aynı zamanda ülkemiz ve gezegenimiz için olumlu bir etki
            yaratmaktır.
          </p>
          <p className="mt-28">
            Tossy ile, kullanıcılarımız partnerimiz olan restoranlar, pazarlar,
            kafeler ve büfelerden tüketilemeyen yiyecekleri rezerve edip satın
            alabilirler.
            <br></br>
            <br></br>
            Bu işyerleriyle işbirliği yaptığımız için, kullanıcılarımıza düşük
            bir fiyatla yüksek kaliteli, lezzetli yiyecekler sunabiliyoruz.
          </p>
          <p className="mt-28">
            Herkesin uygun fiyatlı, lezzetli yiyeceklere erişim hakkına inanıyor
            ve bu gerçeği yaratmaya çabalıyoruz.
            <br></br>
            <br></br>
            Tossy'yi seçtiğiniz için şimdiden teşekkür eder, yiyecek israfını
            azaltmaya ve çevreyi koruma amacına destek olmanız için sizi de
            aramıza bekleriz.
          </p>
        </div>
        <div>
          <Link
            to="basvur"
            className="hidden lg:block bg-main rounded-md py-3 px-12 sm:py-6 sm:px-20 sm:mt-16 lg:py-3 lg:px-12 mt-14 font-worksans font-normal text-xl sm:text-2xl lg:text-xl text-white"
          >
            Uygulamayı İndir
          </Link>
          <Link
            to="basvur"
            className="block lg:hidden bg-main rounded-md py-3 px-12 sm:py-6 sm:px-20 sm:mt-16 lg:py-3 lg:px-12 mt-14 font-worksans font-normal text-xl sm:text-2xl lg:text-xl text-white"
          >
            Başvur
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
