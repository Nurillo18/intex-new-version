import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="py-3">
        <div className="container">
          <p className="font-medium text-headerColor text-sm ">10:00 - 22:00 Без выходных</p>
          <a className="font-bold text-base text-darkBlue" href="tel:+998901288182">
            +998 (90) 128 81 82
          </a>
          <ul>
            <li>
              <Link href={"/"}>О Продукт</Link>
              <Link href={"/"}>Почему мы? </Link>
              <Link href={"/"}>Консултация</Link>
              <Link href={"/"}>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
