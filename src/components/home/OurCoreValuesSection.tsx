'use client';

import React from 'react';

interface CoreValueCard {
  title: string;
  description: string;
  renderIcon: () => React.ReactNode;
}

const coreValues: CoreValueCard[] = [
  {
    title: 'Quality',
    description: 'We are committed to maintaining high quality standards throughout our meat processing and packaging operations.',
    renderIcon: () => (
      <svg viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <rect x="0.573672" y="0.573672" width="134.239" height="134.239" rx="67.1196" stroke="#D4A437" strokeWidth="1.14734" />
        <path d="M68.3957 48.9585C68.4839 48.7687 68.6245 48.608 68.801 48.4954C68.9775 48.3828 69.1825 48.323 69.3918 48.323C69.6011 48.323 69.8061 48.3828 69.9826 48.4954C70.1591 48.608 70.2997 48.7687 70.3879 48.9585L72.8376 53.9782C73.0001 54.3092 73.304 54.5409 73.6591 54.6011L78.9798 55.4859C79.8826 55.6364 80.2437 56.792 79.5967 57.4661L75.7868 61.4565C75.6615 61.5898 75.5681 61.7498 75.5139 61.9245C75.4597 62.0992 75.446 62.2839 75.4738 62.4647L76.3134 68.0321C76.4549 68.977 75.5129 69.6903 74.7004 69.2569L69.9004 66.7019C69.7438 66.6187 69.5692 66.5751 69.3918 66.5751C69.2145 66.5751 69.0398 66.6187 68.8832 66.7019L64.0832 69.2569C63.2707 69.6903 62.3287 68.977 62.4702 68.0321L63.3098 62.4647C63.3377 62.2839 63.3239 62.0992 63.2697 61.9245C63.2155 61.7498 63.1222 61.5898 62.9968 61.4565L59.1869 57.4691C58.5429 56.795 58.901 55.6394 59.8038 55.4889L65.1245 54.6041C65.3015 54.5742 65.4686 54.5019 65.6117 54.3935C65.7548 54.285 65.8695 54.1436 65.946 53.9812L68.3957 48.9585Z" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M90.4559 60.3578C90.4559 63.1242 89.911 65.8635 88.8523 68.4194C87.7937 70.9752 86.242 73.2975 84.2858 75.2536C82.3297 77.2097 80.0074 78.7614 77.4516 79.8201C74.8958 80.8787 72.1564 81.4236 69.39 81.4236C66.6236 81.4236 63.8843 80.8787 61.3285 79.8201C58.7727 78.7614 56.4504 77.2097 54.4943 75.2536C52.5381 73.2975 50.9864 70.9752 49.9278 68.4194C48.8691 65.8635 48.3242 63.1242 48.3242 60.3578C48.3242 54.7708 50.5436 49.4126 54.4943 45.462C58.4449 41.5114 63.803 39.292 69.39 39.292C74.977 39.292 80.3352 41.5114 84.2858 45.462C88.2364 49.4126 90.4559 54.7708 90.4559 60.3578Z" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M72.398 82.4529L77.2913 95.4235C78.2784 98.0326 78.7719 99.3417 79.6296 99.4801C80.4903 99.3537 81.5436 97.9152 82.5728 95.3181C83.3101 93.4583 83.6773 92.5284 84.4387 92.0258C84.6714 91.8734 84.9232 91.753 85.194 91.6647C86.0728 91.3878 87.0809 91.6587 89.1002 92.2064C91.258 92.7902 92.7566 92.6277 93.3495 92.2064C93.524 92.083 93.3495 92.1974 93.3495 92.1974C93.6986 91.5774 93.2291 90.6144 92.2872 88.6854L85.8079 75.4049M66.3792 82.4529L61.4859 95.4174C60.4989 98.0296 59.5238 99.3417 58.6661 99.4801C57.8054 99.3537 57.2908 98.0537 56.2586 95.4566C55.5243 93.5968 55.1 92.5254 54.3386 92.0258C54.1049 91.8709 53.8506 91.7493 53.5832 91.6647C52.7045 91.3848 51.6963 91.6587 49.677 92.2034C47.5193 92.7872 46.0206 92.6157 45.4278 92.1944C45.0787 91.5744 45.5481 90.6114 46.4901 88.6824L52.9693 75.4049" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Freshness',
    description: 'Fresh products are processed, packed, and maintained under controlled conditions to preserve freshness.',
    renderIcon: () => (
      <svg viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <rect x="0.573672" y="0.573672" width="134.239" height="134.239" rx="67.1196" stroke="#D4A437" strokeWidth="1.14734" />
        <path d="M96.4661 42.3008V48.3196C96.4661 77.2911 80.2966 90.4512 60.3533 90.4512H49.047C48.5368 93.4331 48.292 96.4543 48.3157 99.4794H42.2969C42.2969 95.3776 42.646 91.655 43.3381 88.2483C42.646 84.3542 42.2989 79.0697 42.2969 72.3948C42.2969 55.7739 55.77 42.3008 72.3909 42.3008C78.4097 42.3008 84.4285 45.3102 96.4661 42.3008ZM72.3909 48.3196C66.0058 48.3196 59.8821 50.8561 55.3672 55.3711C50.8522 59.886 48.3157 66.0097 48.3157 72.3948C48.3157 73.4842 48.3257 74.5335 48.3458 75.5426C52.1196 69.59 57.6478 64.8864 64.8794 60.7544L67.8648 65.9788C59.2759 70.8901 53.5761 76.4695 50.651 84.4324H60.3533C78.4549 84.4324 90.0591 72.4761 90.4383 49.4872C86.3094 49.8875 82.4724 49.6317 77.7386 48.9215C74.2778 48.4008 73.5977 48.3196 72.3909 48.3196Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    description: 'We build customer confidence through hygienic processing, certified practices, and consistent product quality.',
    renderIcon: () => (
      <svg viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <rect x="0.573672" y="0.573672" width="134.239" height="134.239" rx="67.1196" stroke="#D4A437" strokeWidth="1.14734" />
        <g clipPath="url(#clip0_272_502)">
          <path d="M48.8057 84.3527C49.2317 84.2817 49.669 84.3829 50.0205 84.6339L57.1982 89.7609L68.6748 92.63L68.6758 92.631C68.8841 92.6836 69.0799 92.7768 69.252 92.9054C69.4241 93.0341 69.5693 93.1959 69.6787 93.381C69.788 93.5659 69.8598 93.7708 69.8896 93.9835C69.9194 94.1963 69.9068 94.4133 69.8525 94.6212C69.762 94.9707 69.558 95.2802 69.2725 95.5011C68.9873 95.7216 68.6368 95.8409 68.2764 95.8409L68.2773 95.8419L68.2754 95.8409L68.2734 95.8419V95.8409C68.1375 95.8415 68.0019 95.8261 67.8701 95.7931L56.1143 92.8497V92.8507C55.9157 92.8021 55.7275 92.7168 55.5605 92.5988L55.5586 92.5968L48.127 87.2843C47.7755 87.0333 47.5378 86.6527 47.4668 86.2267C47.3959 85.8008 47.4972 85.3642 47.748 85.0128C47.9991 84.6614 48.3797 84.4237 48.8057 84.3527ZM45.2656 47.4542C45.7747 47.4903 46.2721 47.6264 46.7285 47.8546L53.957 51.4679L68.9756 47.4991L69.1787 47.4591C69.3844 47.4323 69.5941 47.4456 69.7959 47.4991L84.8145 51.4679L92.043 47.8693V47.8683C92.4993 47.6402 92.9961 47.504 93.5049 47.4679C94.0139 47.4318 94.5257 47.4969 95.0098 47.6583C95.4938 47.8198 95.9417 48.0749 96.3271 48.4093C96.7125 48.7437 97.0278 49.1511 97.2559 49.6075L104.459 63.9962L104.488 64.0558L104.491 64.0743C104.701 64.5132 104.828 64.9873 104.862 65.4728C104.898 65.9817 104.833 66.4927 104.672 66.9767C104.51 67.4608 104.255 67.9086 103.921 68.2941C103.586 68.6795 103.179 68.9957 102.723 69.2238L95.1777 72.9952L79.5654 88.6075L79.5605 88.6134C79.3596 88.8085 79.1116 88.9483 78.8408 89.0197C78.5699 89.091 78.2847 89.0916 78.0137 89.0206V89.0197L59.9629 84.5079V84.507C59.7646 84.4583 59.577 84.373 59.4111 84.254V84.2531L43.7148 73.0421L36.0508 69.2091C35.5944 68.981 35.1879 68.6648 34.8535 68.2794C34.5191 67.894 34.263 67.447 34.1016 66.963C33.9401 66.4789 33.876 65.9672 33.9121 65.4581C33.9482 64.9492 34.0844 64.4526 34.3125 63.9962L41.5156 49.5929C41.7436 49.1367 42.0592 48.7299 42.4443 48.3956C42.8298 48.0612 43.2776 47.8051 43.7617 47.6437C44.2457 47.4823 44.7568 47.4182 45.2656 47.4542ZM54.9053 54.5763L46.6377 71.1251L61.0537 81.421L77.9121 85.6378L87.2578 76.2902L78.4922 69.2667C73.1545 73.8926 66.2337 74.6027 60.5322 70.9581C60.0407 70.6464 59.6256 70.2283 59.3174 69.7345C59.009 69.2405 58.815 68.6834 58.751 68.1046C58.6869 67.5257 58.7544 66.9393 58.9473 66.3898C59.1401 65.8405 59.4537 65.3415 59.8652 64.9298L59.8711 64.924L72.7646 52.4171C73.0687 52.1221 73.4758 51.957 73.8994 51.9572H73.9229L69.3848 50.757L54.9053 54.5763ZM62.167 67.2345C62.1031 67.2988 62.055 67.3774 62.0254 67.463C62.0031 67.5274 61.9919 67.5954 61.9922 67.6632L61.9971 67.7306V67.7365C62.0073 67.833 62.0389 67.9263 62.0898 68.0089C62.1408 68.0916 62.2102 68.1615 62.292 68.214H62.291C64.1801 69.4205 66.5993 70.191 69.1982 70.0001C71.7891 69.8097 74.5954 68.6606 77.2666 65.9689C77.55 65.6838 77.9288 65.5139 78.3301 65.4913C78.7314 65.4688 79.1269 65.5953 79.4404 65.8468L89.585 73.9728L92.2305 71.3214L84.1787 55.215H74.5596L62.167 67.2345ZM44.9932 50.7003C44.8791 50.7024 44.7676 50.7355 44.6709 50.796C44.5728 50.8575 44.493 50.9453 44.4414 51.049V51.0509L37.2266 65.4679C37.1558 65.613 37.1435 65.7798 37.1924 65.9337L37.2422 66.046C37.2624 66.0818 37.2865 66.1153 37.3135 66.1466C37.3669 66.2086 37.4319 66.2599 37.5049 66.297L43.8291 69.4581L51.5938 53.9298L45.2695 50.7677C45.1839 50.7244 45.0891 50.7015 44.9932 50.7003ZM93.9707 50.7404C93.8144 50.6879 93.6434 50.6994 93.4951 50.7716L93.4941 50.7706L87.1748 53.9308L94.9365 69.4581L101.26 66.297C101.333 66.2599 101.399 66.2088 101.452 66.1466C101.506 66.0841 101.547 66.012 101.573 65.9337L101.586 65.8917C101.62 65.7461 101.605 65.5929 101.536 65.4591L101.533 65.4532L94.3311 51.0529L94.2656 50.9493C94.1904 50.8532 94.0881 50.7798 93.9707 50.7404Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_272_502">
            <rect width="72.2257" height="72.2257" fill="white" transform="translate(33.2734 33.2728)" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'Customer satisfaction remains at the heart of our operations, with a focus on quality products and dependable service.',
    renderIcon: () => (
      <svg viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <rect x="0.573672" y="0.573672" width="134.239" height="134.239" rx="67.1196" stroke="#D4A437" strokeWidth="1.14734" />
        <g clipPath="url(#clip0_272_513)">
          <path d="M67.129 64.8713C64.136 64.8713 61.2655 63.6823 59.1491 61.5659C57.0327 59.4495 55.8438 56.5791 55.8438 53.586C55.8438 50.593 57.0327 47.7226 59.1491 45.6062C61.2655 43.4898 64.136 42.3008 67.129 42.3008C70.122 42.3008 72.9925 43.4898 75.1089 45.6062C77.2253 47.7226 78.4143 50.593 78.4143 53.586C78.4143 56.5791 77.2253 59.4495 75.1089 61.5659C72.9925 63.6823 70.122 64.8713 67.129 64.8713ZM67.129 46.8149C63.3823 46.8149 60.3579 49.8393 60.3579 53.586C60.3579 57.3328 63.3823 60.3572 67.129 60.3572C70.8757 60.3572 73.9002 57.3328 73.9002 53.586C73.9002 49.8393 70.8757 46.8149 67.129 46.8149Z" fill="currentColor" />
          <path d="M94.2139 82.9277C92.9499 82.9277 91.9568 81.9346 91.9568 80.6707C91.9568 79.4067 92.9499 78.4136 94.2139 78.4136C95.4778 78.4136 96.4709 77.4205 96.4709 76.1566C96.4709 73.1635 95.2819 70.2931 93.1655 68.1767C91.0491 66.0603 88.1787 64.8713 85.1856 64.8713H80.6715C79.4076 64.8713 78.4145 63.8782 78.4145 62.6143C78.4145 61.3503 79.4076 60.3572 80.6715 60.3572C84.4182 60.3572 87.4427 57.3328 87.4427 53.586C87.4427 49.8393 84.4182 46.8149 80.6715 46.8149C79.4076 46.8149 78.4145 45.8218 78.4145 44.5578C78.4145 43.2939 79.4076 42.3008 80.6715 42.3008C83.6646 42.3008 86.535 43.4898 88.6514 45.6062C90.7678 47.7226 91.9568 50.593 91.9568 53.586C91.9568 56.3848 90.9637 58.9127 89.2483 60.8989C95.9744 62.7045 100.985 68.8437 100.985 76.1566C100.985 79.9033 97.9606 82.9277 94.2139 82.9277ZM40.0446 82.9277C36.2979 82.9277 33.2734 79.9033 33.2734 76.1566C33.2734 68.8437 38.239 62.7045 45.0101 60.8989C43.3399 58.9127 42.3016 56.3848 42.3016 53.586C42.3016 50.593 43.4906 47.7226 45.607 45.6062C47.7234 43.4898 50.5939 42.3008 53.5869 42.3008C54.8509 42.3008 55.844 43.2939 55.844 44.5578C55.844 45.8218 54.8509 46.8149 53.5869 46.8149C49.8402 46.8149 46.8158 49.8393 46.8158 53.586C46.8158 57.3328 49.8402 60.3572 53.5869 60.3572C54.8509 60.3572 55.844 61.3503 55.844 62.6143C55.844 63.8782 54.8509 64.8713 53.5869 64.8713H49.0728C46.0798 64.8713 43.2093 66.0603 41.0929 68.1767C38.9765 70.2931 37.7875 73.1635 37.7875 76.1566C37.7875 77.4205 38.7806 78.4136 40.0446 78.4136C41.3085 78.4136 42.3016 79.4067 42.3016 80.6707C42.3016 81.9346 41.3085 82.9277 40.0446 82.9277ZM80.6715 96.47H53.5869C49.8402 96.47 46.8158 93.4456 46.8158 89.6989V85.1848C46.8158 76.4726 53.9029 69.3854 62.6151 69.3854H71.6433C80.3556 69.3854 87.4427 76.4726 87.4427 85.1848V89.6989C87.4427 93.4456 84.4182 96.47 80.6715 96.47ZM62.6151 73.8995C59.6221 73.8995 56.7516 75.0885 54.6352 77.2049C52.5188 79.3213 51.3299 82.1917 51.3299 85.1848V89.6989C51.3299 90.9628 52.323 91.9559 53.5869 91.9559H80.6715C81.9355 91.9559 82.9286 90.9628 82.9286 89.6989V85.1848C82.9286 82.1917 81.7396 79.3213 79.6232 77.2049C77.5068 75.0885 74.6364 73.8995 71.6433 73.8995H62.6151Z" fill="currentColor" />
        </g>
        <defs>
          <clipPath id="clip0_272_513">
            <rect width="67.7162" height="72.2257" fill="white" transform="translate(33.2734 33.2729)" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const bottomFeatures = [
  {
    title: '100% Hygienic',
    renderBadge: () => (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <path d="M16 4L26 8V16C26 22 21.5 26.5 16 28C10.5 26.5 6 22 6 16V8L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 16L14.5 19.5L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Certified Processing',
    renderBadge: () => (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <circle cx="16" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M13 13L15 15L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 20L9 28L16 24L23 28L21 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cold Chain Maintained',
    renderBadge: () => (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <path d="M16 4V28M4 16H28M7.5 7.5L24.5 24.5M24.5 7.5L7.5 24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 8L13 6M16 8L19 6M16 24L13 26M16 24L19 26M8 16L6 13M8 16L6 19M24 16L26 13M24 16L26 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Hygienic Delivery',
    renderBadge: () => (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
        <path d="M4 8H18V22H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 13H24L27 17V22H18V13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="24" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export const OurCoreValuesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FBF3E9] py-12 sm:py-16 lg:py-[3.5vw] overflow-hidden z-10">
      <div className="w-full max-w-[1536px] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-[2vw] flex flex-col justify-between">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl lg:max-w-[50vw] mx-auto mb-6 lg:mb-[1.8vw]">
          {/* Top Category Tag + Golden Line */}
          <div className="flex flex-col items-center mb-1.5">
            <span className="font-manrope font-extrabold text-xs sm:text-sm lg:text-[0.9vw] text-[#153520] tracking-widest uppercase block">
              OUR ESSENCE
            </span>
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[2.5vw] bg-[#D4A437] mt-1 lg:mt-[0.25vw] rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3vw] leading-tight mt-1">
            <span className="font-chau text-[#D4A437] mr-2">Our</span>
            <span className="font-chau font-extrabold text-[#153520]">Core Values</span>
          </h2>

          {/* Subtitle */}
          <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[1vw] text-[#2D2D2D] mt-2 lg:mt-[0.4vw]">
            The values that guide every stage of our processing, quality, and customer service.
          </p>

          {/* Accent Underline with Dot */}
          <div className="flex items-center justify-center gap-1.5 lg:gap-[0.4vw] mt-3 lg:mt-[0.5vw]">
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[2.8vw] bg-[#D4A437]" />
            <span className="w-1.5 h-1.5 lg:w-[0.4vw] lg:h-[0.4vw] rounded-full bg-[#D4A437]" />
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[2.8vw] bg-[#D4A437]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4 CORE VALUE CARDS GRID                                                   */}
        {/* Default: Warm white cards with border. Hover: Dark green card with white text */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1400px] lg:max-w-[84vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[1.5vw] mb-10 lg:mb-[2.2vw]">
          {coreValues.map((card) => {
            return (
              <div
                key={card.title}
                className="group relative w-full max-w-[340px] lg:max-w-[20vw] mx-auto rounded-3xl lg:rounded-[1.2vw] p-6 lg:p-[1.5vw] transition-all duration-300 flex flex-col items-center justify-center text-center bg-[#FAF6F0] hover:bg-[#153520] border border-[#EADBCC] hover:border-[#153520] shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                {/* Circle Icon Badge */}
                <div className="w-16 h-16 lg:w-[5.2vw] lg:h-[5.2vw] rounded-full flex items-center justify-center mb-5 lg:mb-[1vw] transition-colors duration-300 p-2 lg:p-[0.7vw] text-[#13321B] group-hover:text-white">
                  {card.renderIcon()}
                </div>

                {/* Accent Underline & Dot beneath Icon */}
                <div className="flex items-center justify-center gap-1 w-12 lg:w-[2.8vw] mb-4 lg:mb-[0.8vw]">
                  <span className="h-[1.5px] lg:h-[0.12vw] flex-1 bg-[#D4A437]" />
                  <span className="w-1 h-1 lg:w-[0.3vw] lg:h-[0.3vw] rounded-full bg-[#D4A437]" />
                  <span className="h-[1.5px] lg:h-[0.12vw] flex-1 bg-[#D4A437]" />
                </div>

                {/* Card Title - DM Serif Display */}
                <h3 className="font-dm-serif text-2xl sm:text-3xl lg:text-[1.85vw] leading-tight mb-3 lg:mb-[0.6vw] text-[#153520] group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-manrope font-medium text-sm sm:text-base lg:text-[1.02vw] leading-relaxed text-[#4A5568] group-hover:text-white/90 transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM BANNER SECTION                                                     */}
        {/* Tagline + 4 Feature Badges                                                */}
        {/* ========================================================================= */}
        <div className="pt-4 lg:pt-[0.8vw] pb-4 lg:pb-[1.5vw] flex flex-col items-center">
          
          {/* Tagline: Quality you can trust. Lotus Freshness you can taste. */}
          <div className="font-dm-serif text-xl sm:text-2xl lg:text-[1.6vw] text-[#153520] flex items-center justify-center gap-2 sm:gap-3 lg:gap-[0.6vw] mb-6 lg:mb-[1.2vw] flex-wrap text-center">
            <span>Quality you can trust.</span>
            <div className="w-6 h-6 lg:w-[1.5vw] lg:h-[1.5vw] text-[#D4A437] inline-flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                <path d="M15.5 9.63C15.31 6.84 14.18 4.12 12.06 2C10.0091 4.04283 8.7479 6.74593 8.5 9.63C9.79 10.31 10.97 11.19 12 12.26C13.0237 11.2077 14.2044 10.3205 15.5 9.63ZM12 15.45C9.85 12.17 6.18 10 2 10C2 20 11.32 21.89 12 22C12.68 21.88 22 20 22 10C17.82 10 14.15 12.17 12 15.45Z" fill="#CD9F4E"/>
              </svg>
            </div>
            <span>Freshness you can taste.</span>
          </div>

          {/* 4 Feature Badges in Single Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-[2.5vw] flex-wrap">
            {bottomFeatures.map((feat, idx) => (
              <React.Fragment key={feat.title}>
                {idx > 0 && (
                  <span className="hidden sm:block h-8 lg:h-[2vw] w-[1.5px] lg:w-[0.12vw] bg-[#D4A437]/50" />
                )}
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-[0.8vw]">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[3vw] lg:h-[3vw] rounded-full bg-[#EFE4D4] flex items-center justify-center p-2.5 sm:p-3 lg:p-[0.65vw] text-[#153520] shadow-sm">
                    {feat.renderBadge()}
                  </div>
                  <span className="font-manrope font-extrabold text-sm sm:text-base lg:text-[1.05vw] text-[#153520] tracking-tight">
                    {feat.title}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurCoreValuesSection;
