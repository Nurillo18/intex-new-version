import React, { useState } from "react";
import Image from "next/image";
function LanguageModal() {
  const [openLang, setOpenLang] = useState(false);
  const [flagName, setFlagName] = useState("Ru");
  const [flagImg, setFlagImg] = useState("/Images/Header_Imgs/ru-flag.svg");
  const [menuLang, setMenuLang] = useState(false);
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
    if (evt.target.textContent == "Ru") {
      setFlagImg("/Images/Header_Imgs/ru-flag.svg");
      setOpenLang(false);
      setMenuLang(false);
    }
  }
  return (
    <div className="relative hidden sm:inline-block">
      <div
        onClick={() => setOpenLang(!openLang)}
        className="bg-white relative language-wrap hidden cursor-pointer sm:flex  w-20  items-center justify-between py-3 pl-1 pr-2 rounded-md"
      >
        <Image className="w-7 h-5" src={flagImg} width={28} height={20} alt="Flag Russia" />
        <span>{flagName}</span>
        <Image
          priority={true}
          className={`${openLang ? "-rotate-180 duration-300" : "-rotate-0 duration-300"}  w-3 h-2`}
          src={"/Images/Header_imgs/down-icon.svg"}
          width={9}
          height={5}
          alt="Drop img"
        />
      </div>
      <ul
        className={`${
          openLang
            ? "translate-y-0.5 opacity-1 h-auto"
            : "-translate-y-16 opacity-0 h-2 overflow-hidden "
        } duration-300 absolute cursor-pointer shadow-lg rounded-md right-0 w-20 bg-white flex flex-col`}
      >
        <li
          onClick={handleClickedFlag}
          className="items-lang flex  pt-3 pl-3 pr-4 pb-1.5 items-center justify-end"
        >
          Uz
        </li>
        <li
          onClick={handleClickedFlag}
          className="items-lang flex pl-3 pt-1.5 pr-4  pb-3 items-center justify-end"
        >
          En
        </li>
        <li
          onClick={handleClickedFlag}
          className="items-lang flex pl-3 pr-4  pb-3 items-center justify-end"
        >
          Ru
        </li>
      </ul>
    </div>
  );
}

export default LanguageModal;
