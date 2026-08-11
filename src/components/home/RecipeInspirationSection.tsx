'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface RecipeItem {
  id: string;
  line1: string;
  line2: string;
  image: string;
  desktopDishClass: string;
  desktopTooltipClass: string;
}

const recipes: RecipeItem[] = [
  {
    id: 'bbq-wings',
    line1: 'BBQ',
    line2: 'Chicken Wings',
    image: '/assets/home/recipe-inspiration/bbq-chicken-wings.webp',
    desktopDishClass: 'left-[10vw] top-[13.5vw] w-[21.5vw]',
    desktopTooltipClass: '-top-[2vw] left-[-0.5vw]',
  },
  {
    id: 'grilled-chicken',
    line1: 'Grilled',
    line2: 'Chicken',
    image: '/assets/home/recipe-inspiration/grilled-chicken.webp',
    desktopDishClass: 'left-[12.5vw] top-[29.5vw] w-[20.5vw]',
    desktopTooltipClass: '-top-[2vw] left-[-0.5vw]',
  },
  {
    id: 'chicken-biryani',
    line1: 'Chicken',
    line2: 'Biryani',
    image: '/assets/home/recipe-inspiration/chicken-briyani.webp',
    desktopDishClass: 'left-[37.5vw] top-[36vw] w-[20vw]',
    desktopTooltipClass: '-top-[2.2vw] left-[3.5vw]',
  },
  {
    id: 'chicken-lollipop',
    line1: 'Chicken',
    line2: 'Lollipop',
    image: '/assets/home/recipe-inspiration/chicken-lollipop.webp',
    desktopDishClass: 'right-[12.5vw] top-[12.5vw] w-[20vw]',
    desktopTooltipClass: '-top-[2vw] right-[0.5vw]',
  },
  {
    id: 'butter-chicken',
    line1: 'Butter',
    line2: 'Chicken',
    image: '/assets/home/recipe-inspiration/butter-chicken.webp',
    desktopDishClass: 'right-[12vw] top-[28.5vw] w-[20.5vw]',
    desktopTooltipClass: '-top-[2vw] right-[0.5vw]',
  },
];

export const RecipeInspirationSection: React.FC = () => {
  const [hoveredRecipe, setHoveredRecipe] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#FDFBF7] bg-[url('/assets/home/recipe-inspiration/background-image.webp')] h-[100vh] bg-cover bg-center py-10  sm:py-14 lg:py-[2.5vw] z-10 ">
      
      {/* ========================================================================= */}
      {/* DESKTOP INGREDIENT DOODLES (lg:block)                                      */}
      {/* ========================================================================= */}
      {/* Top Left: Garlic cluster & leaves */}
      <div className="hidden lg:block absolute top-[1vw] left-[0.5vw] w-[9.5vw] pointer-events-none z-10 opacity-90 drop-shadow-sm">
        <Image
          src="/assets/home/recipe-inspiration/bg-ingredients-1.webp"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Top Right: Wooden spoon with peppercorns & curry leaves */}
      <div className="hidden lg:block absolute top-[1vw] right-[1vw] w-[9vw] pointer-events-none z-10 opacity-90 drop-shadow-sm">
        <Image
          src="/assets/home/recipe-inspiration/bg-ingredients-3.webp"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Left: Star anise & peppercorns */}
      <div className="hidden lg:block absolute bottom-[1vw] left-[1.5vw] w-[7.5vw] pointer-events-none z-10 opacity-90 drop-shadow-sm">
        <Image
          src="/assets/home/recipe-inspiration/bg-ingredients-2.webp"
          alt=""
          width={240}
          height={240}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Right: Star anise & chicken breast cutlet */}
      <div className="hidden lg:block absolute bottom-[1vw] right-[1.5vw] w-[20.5vw] pointer-events-none z-10 opacity-90 drop-shadow-sm">
        <Image
          src="/assets/home/recipe-inspiration/bg-ingredients-4.webp"
          alt=""
          width={260}
          height={260}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION HEADER                                                            */}
      {/* ========================================================================= */}
      <div className="relative z-20 text-center max-w-3xl lg:max-w-[45vw] mx-auto px-4 mb-4 lg:mb-[0.5vw]">
        {/* Top Tag: INSPIRED BY FRESHNESS */}
        <span className="font-manrope font-extrabold text-xs sm:text-sm lg:text-[0.78vw] text-[#153520] tracking-widest uppercase block mb-1">
          INSPIRED BY FRESHNESS
        </span>

        {/* Main Title: Recipe Inspiration with Chef Hat above 'i' in Recipe */}
        <h2 className="text-3xl sm:text-4xl lg:text-[3.2vw] leading-tight select-none inline-flex items-center justify-center gap-2">
          {/* Word "Recipe" in dark black/green with Chef Hat above 'i' */}
          <span className="font-chau font-regular text-[#11281D] relative inline-block">
            Rec
            <span className="relative inline-block">
              {/* Floating Chef Hat SVG */}
              <span className="absolute -top-[1vw] left-1/2 -translate-x-1/2 w-[0.62em] h-[0.62em] flex items-center justify-center pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#FEF9F2"/>
<path d="M22.3132 10.4998C22.3117 9.1576 21.7779 7.8708 20.8288 6.92172C19.8797 5.97264 18.5929 5.43879 17.2507 5.43731C17.0464 5.43768 16.8423 5.45021 16.6395 5.47481C16.2456 4.57155 15.5968 3.80285 14.7725 3.26298C13.9482 2.72311 12.9842 2.43555 11.9988 2.43555C11.0135 2.43555 10.0495 2.72311 9.22518 3.26298C8.40086 3.80285 7.75201 4.57155 7.3582 5.47481C7.15662 5.45035 6.95376 5.43783 6.7507 5.43731C5.59173 5.43804 4.46811 5.83641 3.56751 6.56588C2.66691 7.29535 2.04387 8.31174 1.80246 9.44528C1.56105 10.5788 1.71588 11.7609 2.2411 12.794C2.76631 13.8271 3.63011 14.6488 4.6882 15.1217V19.4998C4.6882 19.8479 4.82648 20.1817 5.07262 20.4279C5.31876 20.674 5.6526 20.8123 6.0007 20.8123H18.0007C18.3488 20.8123 18.6826 20.674 18.9288 20.4279C19.1749 20.1817 19.3132 19.8479 19.3132 19.4998V15.1217C20.2057 14.7226 20.9638 14.074 21.496 13.254C22.0283 12.4339 22.3121 11.4775 22.3132 10.4998ZM18.1882 19.4998C18.1882 19.5495 18.1684 19.5972 18.1333 19.6324C18.0981 19.6676 18.0504 19.6873 18.0007 19.6873H6.0007C5.95097 19.6873 5.90328 19.6676 5.86812 19.6324C5.83295 19.5972 5.8132 19.5495 5.8132 19.4998V15.4742C6.12228 15.5326 6.43614 15.5621 6.7507 15.5623H17.2507C17.5653 15.5621 17.8791 15.5326 18.1882 15.4742V19.4998ZM17.2507 14.4373H15.7216L16.2963 12.1367C16.3143 12.065 16.318 11.9905 16.3072 11.9175C16.2964 11.8444 16.2713 11.7742 16.2333 11.7108C16.1953 11.6474 16.1453 11.5921 16.086 11.5481C16.0266 11.5041 15.9592 11.4722 15.8876 11.4542C15.8159 11.4362 15.7414 11.4325 15.6684 11.4433C15.5953 11.4541 15.525 11.4792 15.4617 11.5172C15.3983 11.5552 15.343 11.6052 15.299 11.6645C15.255 11.7239 15.223 11.7913 15.2051 11.8629L14.561 14.4373H12.5632V11.9998C12.5632 11.8506 12.5039 11.7075 12.3984 11.6021C12.293 11.4966 12.1499 11.4373 12.0007 11.4373C11.8515 11.4373 11.7084 11.4966 11.603 11.6021C11.4975 11.7075 11.4382 11.8506 11.4382 11.9998V14.4373H9.44039L8.79633 11.8629C8.77835 11.7913 8.74644 11.7239 8.70241 11.6645C8.65839 11.6052 8.60311 11.5552 8.53973 11.5172C8.47635 11.4792 8.40612 11.4541 8.33305 11.4433C8.25997 11.4325 8.18548 11.4362 8.11383 11.4542C8.04217 11.4722 7.97476 11.5041 7.91544 11.5481C7.85612 11.5921 7.80606 11.6474 7.7681 11.7108C7.73014 11.7742 7.70504 11.8444 7.69423 11.9175C7.68341 11.9905 7.6871 12.065 7.70508 12.1367L8.27976 14.4373H6.7507C5.70641 14.4373 4.70489 14.0225 3.96647 13.284C3.22804 12.5456 2.8132 11.5441 2.8132 10.4998C2.8132 9.45552 3.22804 8.454 3.96647 7.71557C4.70489 6.97715 5.70641 6.56231 6.7507 6.56231C6.84445 6.56231 6.9382 6.56231 7.02445 6.57262C6.96759 6.87842 6.93872 7.18876 6.9382 7.49981C6.9382 7.64899 6.99746 7.79206 7.10295 7.89755C7.20844 8.00304 7.35152 8.06231 7.5007 8.06231C7.64988 8.06231 7.79296 8.00304 7.89845 7.89755C8.00394 7.79206 8.0632 7.64899 8.0632 7.49981C8.0632 6.45552 8.47804 5.454 9.21647 4.71557C9.95489 3.97715 10.9564 3.56231 12.0007 3.56231C13.045 3.56231 14.0465 3.97715 14.7849 4.71557C15.5234 5.454 15.9382 6.45552 15.9382 7.49981C15.9382 7.64899 15.9975 7.79206 16.103 7.89755C16.2084 8.00304 16.3515 8.06231 16.5007 8.06231C16.6499 8.06231 16.793 8.00304 16.8984 7.89755C17.0039 7.79206 17.0632 7.64899 17.0632 7.49981C17.0627 7.18876 17.0338 6.87842 16.977 6.57262C17.0707 6.56699 17.1588 6.56231 17.2507 6.56231C18.295 6.56231 19.2965 6.97715 20.0349 7.71557C20.7734 8.454 21.1882 9.45552 21.1882 10.4998C21.1882 11.5441 20.7734 12.5456 20.0349 13.284C19.2965 14.0225 18.295 14.4373 17.2507 14.4373Z" fill="black"/>
</svg>
              </span>
              i
            </span>
            pe
          </span>

          {/* Word "Inspiration" in Warm Gold */}
          <span className="font-chau font-regular text-[#D4A437] ml-1">
            Inspiration
          </span>
        </h2>

        {/* Thin Grey Horizontal Underline Divider Line */}
        <div className="w-[17vw] max-w-xs sm:max-w-md lg:max-w-[28vw] mx-auto h-[1px] bg-[#AFAA9E] my-2 lg:my-[0.5vw]" />

        {/* Subtitle */}
        <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[0.88vw] text-[#4A5568]">
          One fresh chicken. Endless delicious possibilities.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP DISPLAY LAYOUT (lg:block) - Fluid pure vw values                 */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full max-w-[88vw] h-[36vw] mx-auto z-20">
        
        {/* Center Standing Chicken Image */}
        <div className="absolute left-[34.5vw] top-[4vw] w-[20vw] z-10 pointer-events-none drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src="/assets/home/recipe-inspiration/center-chicken-image.webp"
            alt="Fresh Raw Chicken"
            width={700}
            height={700}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* 5 Recipe Bowls + Interactive Hover Tooltips */}
        {recipes.map((item, index) => {
          const isHovered = hoveredRecipe === item.id;
          const desktopPositions = [
            'left-[9vw] top-[3.5vw] w-[14.5vw]',
            'left-[16vw] top-[19.5vw] w-[14vw]',
            'left-[38.5vw] top-[27.5vw] w-[14vw]',
            'right-[7vw] top-[4vw] w-[14.5vw]',
            'right-[12vw] top-[20vw] w-[14vw]',
          ];
          return (
            <div
              key={item.id}
              className={`absolute ${desktopPositions[index]} z-20 group cursor-pointer transition-all duration-300`}
              onMouseEnter={() => setHoveredRecipe(item.id)}
              onMouseLeave={() => setHoveredRecipe(null)}
            >
              {/* Tooltip Badge Card with Fire Icon */}
              <div
                className={`absolute ${item.desktopTooltipClass} z-30 transition-all duration-300 ${
                  isHovered ? 'scale-110 -translate-y-1 shadow-2xl z-40' : 'scale-100 opacity-95 shadow-md'
                }`}
              >
                <div className="relative bg-[#FAF5EE] border border-[#D4A437]/60 rounded-[0.6vw] px-[0.7vw] py-[0.4vw] flex items-center gap-[0.5vw] shadow-lg backdrop-blur-sm">
                  {/* Fire Icon Badge SVG from fire-icon.svg */}
                  <div className="w-[1.4vw] h-[1.4vw] flex-shrink-0 flex items-center justify-center rounded-full bg-[#D62828] text-white shadow-sm">
                    <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-[0.25vw]">
                      <path
                        d="M23.4359 30.9163C36.1672 27.7913 29.038 15.2913 20.3807 10.083C19.3619 13.7288 17.8338 14.7705 14.7786 18.4163C10.7328 23.2434 12.7422 28.833 18.3432 30.9163C17.4942 29.8747 15.3047 27.6872 16.8151 24.6663C17.3359 23.6247 18.3776 22.583 17.8567 20.4997C18.8755 21.0205 20.9817 21.5413 21.5026 24.1455C22.3515 23.1038 23.2317 20.9163 22.4172 18.4163C28.7942 23.1038 26.1901 27.7913 23.4359 30.9163Z"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Tooltip Title Lines */}
                  <div className="leading-tight">
                    <span className="block font-manrope font-extrabold text-[#11281D] text-[0.72vw] tracking-tight">
                      {item.line1}
                    </span>
                    <span className="block font-manrope font-semibold text-[#4A5568] text-[0.62vw] whitespace-nowrap">
                      {item.line2}
                    </span>
                  </div>

                  {/* Bottom Pointer Notch */}
                  <div className="absolute -bottom-[0.28vw] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[0.28vw] border-l-transparent border-r-[0.28vw] border-r-transparent border-t-[0.32vw] border-t-[#FAF5EE]" />
                </div>
              </div>

              {/* Dish Bowl Image */}
              <div className="relative w-full h-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-xl">
                <Image
                  src={item.image}
                  alt={`${item.line1} ${item.line2}`}
                  width={450}
                  height={350}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          );
        })}

      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET LAYOUT (lg:hidden)                                       */}
      {/* Sticky left chicken sidebar + right scrolling recipe dishes               */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-4 max-w-2xl mx-auto py-4">
        <div className="flex gap-4 sm:gap-6 items-start relative">
          
          {/* Sticky Left Column: Center Chicken Image stays fixed while scrolling section */}
          <div className="w-[38%] sm:w-[35%] flex-shrink-0">
            <div className="sticky top-28 sm:top-32 flex flex-col items-center justify-center py-2">
              <div className="w-full max-w-[170px] sm:max-w-[210px] aspect-square relative flex items-center justify-center">
                <Image
                  src="/assets/home/recipe-inspiration/center-chicken-image.webp"
                  alt="Fresh Raw Chicken"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <span className="font-manrope font-extrabold text-[10px] sm:text-xs text-[#11281D] uppercase text-center mt-2 tracking-wider bg-[#FAF0E4]/90 px-2.5 py-1 rounded-full border border-[#EADBCC] shadow-xs">
                Fresh Chicken
              </span>
            </div>
          </div>

          {/* Scrolling Right Column: 5 Recipe Dishes */}
          <div className="w-[62%] sm:w-[65%] flex flex-col space-y-6">
            {recipes.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#EADBCC] shadow-md flex flex-col items-center text-center transition-transform active:scale-[0.98]"
              >
                {/* Tooltip Badge Top Header */}
                <div className="bg-[#FAF5EE] border border-[#D4A437]/50 rounded-xl px-3 py-1.5 flex items-center gap-2 mb-2.5 shadow-sm w-full justify-center">
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-[#D62828] text-white">
                    <svg viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-0.5">
                      <path
                        d="M23.4359 30.9163C36.1672 27.7913 29.038 15.2913 20.3807 10.083C19.3619 13.7288 17.8338 14.7705 14.7786 18.4163C10.7328 23.2434 12.7422 28.833 18.3432 30.9163C17.4942 29.8747 15.3047 27.6872 16.8151 24.6663C17.3359 23.6247 18.3776 22.583 17.8567 20.4997C18.8755 21.0205 20.9817 21.5413 21.5026 24.1455C22.3515 23.1038 23.2317 20.9163 22.4172 18.4163C28.7942 23.1038 26.1901 27.7913 23.4359 30.9163Z"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <span className="block font-manrope font-extrabold text-[#11281D] text-xs">
                      {item.line1}
                    </span>
                    <span className="block font-manrope font-semibold text-[#4A5568] text-[10px]">
                      {item.line2}
                    </span>
                  </div>
                </div>

                {/* Dish Image */}
                <div className="w-full max-w-[180px] h-auto mb-1">
                  <Image
                    src={item.image}
                    alt={`${item.line1} ${item.line2}`}
                    width={240}
                    height={200}
                    className="w-full h-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default RecipeInspirationSection;
