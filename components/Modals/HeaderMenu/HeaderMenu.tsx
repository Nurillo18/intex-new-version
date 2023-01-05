import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface PropsModal {
  setClickMenu: any;
  clickMenu: boolean;
}
function HeaderMenu({ setClickMenu, clickMenu }: PropsModal) {
  const [menuLang, setMenuLang] = useState(false);
  const [flagImg, setFlagImg] = useState("/Images/Header_Imgs/ru-flag.svg");
  const [flagName, setFlagName] = useState("Ru");
  const [openLang, setOpenLang] = useState(false);
  const [menuCatOpen, setMenuCatOpen] = useState(false);
  function handleClickedFlag(evt: any) {
    setFlagName(evt.target.textContent);
    if (evt.target.textContent == "Uz") {
      setFlagImg("/Images/Header_Imgs/uzb-flag.svg");
      setOpenLang(false);
      setMenuLang(false);
    }
    if (evt.target.textContent == "En") {
      setFlagImg("/Images/Header_Imgs/usa-flag.svg");
      setOpenLang(false);
      setMenuLang(false);
    }
    if (evt.target.textContent == "Ру") {
      setFlagImg("/Images/Header_Imgs/ru-flag.svg");
      setOpenLang(false);
      setMenuLang(false);
    }
  }
  return (
    <div
      onClick={(evt: any) => (evt.target.id === "wrapper" ? setClickMenu(false) : "")}
      id="wrapper"
      className={` left-0 ${
        clickMenu ? "bg-black backdrop-blur-sm bg-opacity-25 z-50" : "-z-20"
      }  inset-0 "
     fixed duration-300 z-50 top-0 `}
    >
      <div
        className={`w-[75%] ${
          clickMenu ? "left-0" : " -left-[100%]"
        } absolute h-screen duration-300 bg-white pt-14 px-4`}
      >
        <Link
          className="mb-11 inline-block"
          href={"/"}
          onClick={() => {
            setClickMenu(false);
          }}
        >
          <Image
            className=" w-menuBarWidth h-menuBarHeight"
            src={"/Images/Header_Imgs/logo.svg"}
            width={150}
            height={14}
            alt="Menu Bar Logo"
          />
        </Link>
        <div
          onClick={() => setMenuLang(!menuLang)}
          className={`flex z-50 relative items-center justify-between ${
            menuLang ? "" : "border-b-2"
          } pb-2.5 cursor-pointer`}
        >
          <div className="flex items-center text-sm font-medium text-black-black_dark">
            <Image
              className="w-7 h-5 mr-2.5"
              src={flagImg}
              width={28}
              height={20}
              alt="Russia Flag Img"
            />
            {flagName}
          </div>
          <Image
            className={`w-3 h-2 ${menuLang ? "-rotate-180 duration-300" : "rotate-0 duration-300"}`}
            src={"/Images/Header_Imgs/down-icon.svg"}
            width={9}
            height={5}
            alt="Drop Down Img"
          />
        </div>
        {/* Language Drop Down */}
        <ul
          className={`${
            menuLang
              ? "translate-y-0 opacity-1 h-[130px] mb-2"
              : "-translate-y-8 opacity-0 h-5 duration-300 overflow-hidden "
          }  duration-300 pb-2.5 cursor-pointer relative z-20 border-b-2 bg-white flex flex-col`}
        >
          <li onClick={handleClickedFlag} className="items-lang flex py-3 pl-12 items-center">
            Uz
          </li>
          <li
            onClick={handleClickedFlag}
            className="items-lang flex pt-1.5 mb-4 pl-12 items-center"
          >
            En
          </li>
          <li onClick={handleClickedFlag} className="items-lang flex  pl-12 items-center">
            Ру
          </li>
        </ul>
        <div
          onClick={() => setMenuCatOpen(!menuCatOpen)}
          className={`${
            menuCatOpen ? "" : "border-b-2"
          } flex items-center justify-between pb-2 cursor-pointer`}
        >
          <Link
            href={"/"}
            className="flex items-center text-base font-medium text-black-black_dark"
          >
            Категории
          </Link>
          <Image
            className={`${
              menuCatOpen ? "-rotate-180 duration-300" : "rotate-0 duration-300"
            } w-3 h-2`}
            src={"/Images/Header_Imgs/down-icon.svg"}
            width={9}
            height={5}
            alt="Drop Down Img"
          />
        </div>
        {/* category Drop Down */}
        <ul
          className={` ${
            menuCatOpen
              ? "h-[110px] border-b-2 opacity-1 duration-200"
              : "h-0 opacity-0 duration-300 overflow-hidden"
          } w-full flex flex-col space-y-5 category-list bg-white pb-2 pl-3 `}
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
        </ul>
        <div className={`flex ${menuCatOpen ? "mt-3" : "mt-0"} flex-col mt-2 space-y-5`}>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            Популярное
          </Link>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            Новинки
          </Link>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            На скидке
          </Link>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            О Продукт
          </Link>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            Почему мы?
          </Link>
          <Link className="font-medium text-base text-[#24283A]" href={"/"}>
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
