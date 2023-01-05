import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderMenu from "../Modals/HeaderMenu/HeaderMenu";

function Header() {
  return (
    <header className="bg-headerBg">
      <div className="py-4 sm:py-3 border-b-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link className="sm:hidden" href={"/"}>
              <Image src={"/Images/Header_Imgs/logo.svg"} width={150} height={14} alt="Site Logo" />
            </Link>
            <p className="font-medium hidden sm:flex text-headerColor text-sm ">
              10:00 - 22:00 Без выходных
            </p>
            <div className="flex items-center">
              <a
                className="font-bold hidden lg:flex mr-120 text-base text-darkBlue"
                href="tel:+998901288182"
              >
                +998 (90) 128 81 82
              </a>
              <ul className="sm:flex hidden items-center space-x-6">
                <li>
                  <Link className="font-medium text-sm text-headerColor" href={"/"}>
                    О Продукт
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-headerColor" href={"/"}>
                    Почему мы?
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-headerColor" href={"/"}>
                    Консултация
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-sm text-headerColor" href={"/"}>
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="sm:hidden" href={"tel:+998901288182"}>
              <Image src={"/Images/Header_Imgs/phone.svg"} width={24} height={24} alt="Site Logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container xl:space-x-6 sm:space-x-0 flex items-center sm:justify-between">
          <div className="flex items-center space-x-5">
            <Image
              className="hidden md:flex"
              src={"/Images/Header_Imgs/logo.svg"}
              width={200}
              height={19}
              alt="Site Logo"
            />
            <ul className="hidden xl:flex items-center space-x-6">
              <li className="relative category-item">
                <Link
                  className="font-medium category-link text-base flex text-[#24283A]"
                  href={"/"}
                >
                  Категории
                  <Image
                    className="ml-[6px] drop-img"
                    src={"/Images/Header_Imgs/down-icon.svg"}
                    width={9}
                    height={5}
                    alt="drop icon"
                  />
                </Link>
                <div
                  className={`absolute shadow-xl drop-down h-0 overflow-hidden opacity-0 w-0 flex flex-col space-y-2 bg-white p-3 rounded-xl`}
                >
                  <Link className="font-normal text-sm text-[#464A4D]" href={"/"}>
                    Надувные бассейны
                  </Link>
                  <Link className="font-normal text-sm text-[#464A4D]" href={"/"}>
                    Надувные бассейны
                  </Link>
                  <Link className="font-normal text-sm text-[#464A4D]" href={"/"}>
                    Надувные бассейны
                  </Link>
                  <Link className="font-normal text-sm text-[#464A4D]" href={"/"}>
                    Надувные бассейны
                  </Link>
                </div>
              </li>
              <li>
                <Link className="font-medium text-base text-[#24283A]" href={"/"}>
                  Популярное
                </Link>
              </li>
              <li>
                <Link className="font-medium text-base text-[#24283A]" href={"/"}>
                  Новинки
                </Link>
              </li>
              <li>
                <Link className="font-medium text-base text-[#24283A]" href={"/"}>
                  На скидке
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center w-full md:w-auto justify-between md:justify-start space-x-5">
            <Image
              className="flex sm:hidden w-[26px] h-[19px]"
              src={"/Images/Header_Imgs/hamburger.svg"}
              width={26}
              height={19}
              alt="Hamburger Icon"
            />
            <input
              className="py-2.5 w-full max-w-[219px] sm:max-w-[260px] bg-searchIcon bg-no-repeat bg-[12.5px] pl-[38px] rounded-xl outline-none"
              type="text"
              placeholder="Поиск"
            />
            <button className="w-[42px] h-[42px] rounded-[10px] bg-white flex items-center justify-center">
              <Image
                src={"/Images/Header_Imgs/korzina.svg"}
                width={24}
                height={24}
                alt="Korzina Icon"
              />
            </button>
            <button className="w-[42px] hidden sm:flex h-[42px] rounded-[10px] bg-white items-center justify-center">
              <Image
                src={"/Images/Header_Imgs/account.svg"}
                width={16}
                height={18}
                alt="Korzina Icon"
              />
            </button>
            <div className=" hidden sm:flex items-center space-x-2.5 bg-white py-2.5 pl-[5px] pr-[8px] rounded-[5px]">
              <Image src={"/Images/Header_Imgs/ru-flag.svg"} width={28} height={20} alt="Ru Flag" />
              <span>Ru</span>
              <Image src={"/Images/Header_Imgs/down-icon.svg"} width={9} height={5} alt="Ru Flag" />
            </div>
            <Image
              className="hidden sm:flex xl:hidden w-[26px] h-[19px]"
              src={"/Images/Header_Imgs/hamburger.svg"}
              width={26}
              height={19}
              alt="Hamburger Icon"
            />
          </div>
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
}

export default Header;
