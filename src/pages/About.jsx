import React from "react";
import { Link } from "react-router-dom";
import Vector3 from "../images/Vector3.svg";
import Vector4 from "../images/Vector4.svg";

const About = () => {
  return (
    <>
      {/* Img */}
      <div className="bg-main flex justify-center h-96 sm:h-[490px] lg:relative">
        <img
          src={Vector3}
          alt="$$$$$"
          className="w-11/12 px-2 lg:w-[680px] lg:absolute"
        />
      </div>

      {/* Merhaba */}
      <div className="flex flex-col text-center items-center w-10/12 mx-auto mt-14 lg:mt-48">
        <h1 className="font-crimson font-bold text-4xl sm:text-5xl lg:text-4xl text-main">
          Hakkımızda
        </h1>
        <h2 className="font-worksans font-bold text-base sm:text-xl lg:text-base text-alternative tracking-[5px] mt-4">
          MERHABA!
        </h2>
        <div className="font-worksans font-medium text-base sm:text-xl lg:text-base text-main mt-4">
          <p className="mt-10">
            Tossy olarak, yiyeceklerin atılmasını azaltmak ve çevreye yardımcı
            olmak amacıyla kurulmuş bir mobil uygulamayız.
          </p>
          <p className="mt-16">
            Bizim misyonumuz, kullanıcılarımıza uygun fiyatlı yiyecek seçeneği
            sunmak, aynı zamanda ülkemiz ve gezegenimiz için olumlu bir etki
            yaratmaktır.
          </p>
          <p className="mt-16">
            Tossy ile, kullanıcılarımız partnerimiz olan restoranlar, pazarlar,
            kafeler ve büfelerden tüketilemeyen yiyecekleri rezerve edip satın
            alabilirler.
            <br></br>
            <br></br>
            Bu işyerleriyle işbirliği yaptığımız için, kullanıcılarımıza düşük
            bir fiyatla yüksek kaliteli, lezzetli yiyecekler sunabiliyoruz.
          </p>
          <p className="mt-16">
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
            className="hidden lg:block bg-main rounded-md py-3 px-12 sm:py-6 sm:px-20 sm:mt-16 lg:py-3 lg:px-12 mt-14 font-worksans font-normal text-base text-white"
          >
            Uygulamayı İndir
          </Link>
          <Link
            to="basvur"
            className="block lg:hidden bg-main rounded-md py-3 px-12 sm:py-6 sm:px-20 sm:mt-16 lg:py-3 lg:px-12 mt-14 font-worksans font-normal text-base sm:text-2xl text-white"
          >
            Başvur
          </Link>
        </div>
      </div>

      {/* */}
      <div className="w-11/12 lg:w-full flex flex-col lg:flex-row lg:justify-around mx-auto mt-9 sm:mt-24 lg:mt-9">
        <div className="sm:self-center lg:self-auto lg:order-1 lg:w-5/12">
          <img src={Vector4} alt="$$$$$" />
        </div>

        <div className="mt-7 lg:mt-32 lg:w-4/12">
          <h1 className="block lg:hidden font-crimson font-bold text-main text-4xl sm:text-6xl">
            Misyonumuz
          </h1>
          <h1 className="hidden lg:block font-crimson font-bold text-main text-3xl">
            Misyonumuza Kulak Verin
          </h1>

          <div className="font-worksans font-normal text-sm sm:text-2xl lg:text-sm mt-5">
            <p>
              Bizim misyonumuz, yiyeceklerin israfını azaltarak çevre için
              olumlu bir etki yaratmak ve aynı zamanda kullanıcılarımıza uygun
              fiyatlı, lezzetli yiyecek seçenekleri sunmaktır. Bu amaçla,
              restoranlar, pazarlar, kafeler ve bufetler gibi işyerleriyle
              işbirliği yaparak, tüketilemeyen yiyecekleri kullanıcılarımızla
              paylaşıyoruz.
            </p>
            <br></br>
            <br></br>

            <p>
              Bizimle birlikte çalışan partnerlerimiz de, yiyeceklerinin
              atılmaması için ellerinden geleni yapıyor ve bu sayede hem
              yiyeceklerin israfını azaltıyoruz hem de kullanıcılarımıza düşük
              fiyatlarla yüksek kaliteli yiyecekler sunuyoruz.
            </p>
            <br></br>
            <br></br>

            <p>
              Misyonumuz, yiyeceklerin israfını azaltarak dünyayı gelecek
              nesiller için daha daha yaşanabilir bir yer haline getirmek ve
              aynı zamanda herkesin uygun fiyatlı, lezzetli yiyeceklere erişim
              hakkına sahip olmasını sağlamaktır.
            </p>
          </div>

          <Link
            to="kesfet"
            className="block lg:hidden bg-main rounded-md font-worksans font-normal text-white text-xl text-center mx-auto w-5/12 py-2 sm:text-3xl sm:py-4 sm:mt-10 mt-5"
          >
            Keşfet
          </Link>
        </div>
      </div>

      {/* */}
      <div className="flex flex-col w-full mt-28 mb-14">
        <h1 className="font-crimson font-bold text-4xl sm:text-6xl lg:text-4xl text-main flex flex-col lg:flex-row lg:justify-center text-center">
          <span>Sözleşme&nbsp;</span>
          <span>ve&nbsp;</span>
          <span>Dökümanlar</span>
        </h1>

        <div className="font-worksans font-bold text-sm sm:text-lg lg:text-sm text-alternative tracking-[5px] !leading-loose flex flex-col lg:tracking-widest lg:flex-row lg:justify-center text-center mt-4 sm:mt-8 lg:mt-4">
          <span>AYDINLATMA METNİ,&nbsp;</span>
          <span>AÇIK RIZA BEYANI,&nbsp;</span>
          <span>GİZLİLİK SÖZLEŞMESİ,&nbsp;</span>
          <span>KULLANIM KOŞULLARI,&nbsp;</span>
          <span>PARTNERLİK SÖZLEŞMESİ</span>
        </div>

        <div className="font-worksans font-normal text-base sm:text-xl lg:text-base text-main text-center w-11/12 mx-auto mt-4 sm:mt-8 lg:mt-4">
          <p className="block lg:hidden">
            Dünyayı ve cüzdanınızı korurken, sizi memnun tutmak bizim Yukarıda
            bulunan dokümanlar firmamızın farklı süreçlerinde farklı ihtiyaçlar
            ve yasal yükümlülükler gereğince aktif olarak kullanılmaktadır. çok
            önemli. Gelin tanışalım!
          </p>
          <p className="hidden lg:block">
            Yukarıda bulunan dokümanlar firmamızın farklı süreçlerinde farklı
            ihtiyaçlar ve yasal yükümlülükler gereğince aktif olarak
            kullanılmaktadır.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
