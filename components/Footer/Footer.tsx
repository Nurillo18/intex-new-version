import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-footerBgColor pt-[50px] pb-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[34px] lg:gap-[74px] w-11/12 sm:w-full">
          <div>
            <Link href={"/"} className="block py-[5px]">
              <Image
                src={`/Images/Footer_imgs/FooterLogo.svg`}
                width={164}
                height={16}
                alt="site_logo"
              />
            </Link>
            <p className="my-6 hidden sm:block">
              Бассейны от intex - доступная по цене, качественная, надежная и
              экологически чистая продукция, которая предназначена для приятного
              отдыха всей семьи
            </p>
            <div className="max-w-[237px] p-[6px] flex justify-between mt-6 sm:mt-0">
              <Link href="https://www.facebook.com/" target="blank">
                <Image
                  src={`/Images/Footer_imgs/facebook.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="facebook"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ibrokhim-ismoilov-876280221/"
                target="blank"
              >
                <Image
                  src={`/Images/Footer_imgs/Linkedin.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="linkedin"
                />
              </Link>
              <Link href="https://www.instagram.com/" target="blank">
                <Image
                  src={`/Images/Footer_imgs/Instagram.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="instagram"
                />
              </Link>
              <Link href="https://twitter.com/" target="blank">
                <Image
                  src={`/Images/Footer_imgs/Twitter.svg`}
                  className="w-9 h-9 hover:scale-105 transition-all"
                  width={36}
                  height={36}
                  alt="twitter"
                />
              </Link>
            </div>
          </div>
          <div className="lg:pl-10 hidden sm:block">
            <p className="font-bold text-textColor text-lg">Полезные ссылки</p>
            <ul className="space-y-3 mt-6">
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  O Продукт
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Почему мы?
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Категории
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Популярное
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Новинки
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  На скидке
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-textColor text-lg">Центр помощи</p>
            <ul className="space-y-3 mt-6">
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link href="/" className="font-medium text-footerLinkColor text-sm">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-black-black_dark font-bold text-lg">
              Адрес
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start">
                <Image
                  src={`/Images/Footer_imgs/Location.svg`}
                  className="w-5 h-6"
                  width={18}
                  height={23}
                  alt="Location"
                />
                <address className="pl-2 text-sm  text-footerLinkColor not-italic">
                  Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент
                </address>
              </li>
              <li className="flex items-start">
                <Image
                  src={`/Images/Footer_imgs/Phone.svg`}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Phone"
                />
                <a
                  href="tel:+998901288182"
                  className="text-sm pl-2 text-footerLinkColor"
                >
                  +998 (90) 128 81 82
                </a>
              </li>
              <li className="flex items-start">
                <Image
                  src={`/Images/Footer_imgs/Message.svg`}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Message"
                />
                <a
                  href="mailto:Intex@gmail.com"
                  className="text-sm pl-2 text-footerLinkColor"
                >
                  Intex@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Image
                  src={`/Images/Footer_imgs/Clock.svg`}
                  className="w-5 h-5"
                  width={18}
                  height={19}
                  alt="Clock"
                />
                <p className="text-sm pl-2 text-footerLinkColor">
                  10:00 - 22:00 Без выходных
                </p>
              </li>
            </ul>
          </div>
        </div>
        <span className="block w-full h-[2px] bg-[#F2F2F2] my-4 sm:mt-[15px] sm:mb-[30px]"></span>
        <p className="text-sm text-footerLinkColor">INTEX-MARKET © 2022, Разработано в Support Solutions Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;