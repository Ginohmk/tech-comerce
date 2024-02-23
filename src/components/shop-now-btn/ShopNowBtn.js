import ArrowRightSvg from '@/assets/svgs/arrow-right';
import React from 'react';

const ShopNowBtn = ({ text, color, bgColor }) => {
  return (
    <button
      className={`${color} ${bgColor}  flex items-center justify-center gap-3 py-2 px-4 cursor-pointer rounded-sm`}
    >
      {text}

      <ArrowRightSvg fill="#191C1F" />
    </button>
  );
};

export default ShopNowBtn;
