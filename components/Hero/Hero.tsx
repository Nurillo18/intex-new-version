import React from "react";
import Image from "next/image";
import CallBtn from "../Buttons/CallBtn/CallBtn";

function Hero() {
   return (
      <section className="mt-7 sm:mt-12 md:mt-10 mb-heroBottomMobile md:mb-heroBottom">
         <div className="container mx-auto px-4">
            <div className="bg-gray-bg_main  rounded-3xl flex-col lg:flex-row flex lg:items-center justify-between">
               <div className="w-full max-w-container mx-auto">
                  <div className="bg-gray-bg_main py-6 sm:pl-32 md:py-32 lg:py-21 pl-4 rounded-sectionRadius flex-col lg:flex-row flex lg:items-center justify-between">
                     <div className="w-full lg:w-heroContent pr-4">
                        <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-black-black_dark mb-4">
                           Бассейны от intex в Ташкенте
                        </h1>
                        <p className="font-normal text-sm lg:text-base text-black-black_thin mb-6 sm:mb-12">
                           Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи.
                        </p>
                        <div className="hidden sm:inline-block">
                           <CallBtn text="Заказать звонок" className="" />
                        </div>
                     </div>
                     <div className="flex justify-end">
                        <Image
                           className="w-heroImg h-heroimgHeight hidden sm:inline-block"
                           id="hero-bg"
                           src={"/Images/Hero_imgs/hero-bg.png"}
                           width={571}
                           height={319}
                           alt="Hero Bg"
                        />
                        <Image
                           className="w-heroImgMobile h-heriImgMobile sm:hidden "
                           id="hero-bg"
                           src={"/Images/Hero_imgs/heroMobile.png"}
                           width={320}
                           height={160}
                           alt="Hero Bg"
                        />
                     </div>
                     <div className="sm:hidden mt-7 pr-4">
                        <CallBtn text="Заказать звонок" className="w-full" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
