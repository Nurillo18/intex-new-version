import React from "react";

interface CallBtnType {
  text: string
  className: string
}

function CallBtn({ text, className }: CallBtnType) {
  return (
    <a
      className={`font-medium text-white text-base lg:text-lg bg-blue-base text-center px-[26px] py-[13px] rounded-xl inline-block ${className}`}
      href="tel:+998901288182"
    >
      {text}
    </a>
  );
}

export default CallBtn;
