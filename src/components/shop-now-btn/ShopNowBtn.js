import ArrowRightSvg from '@/assets/svgs/arrow-right';
import React from 'react';

const ShopNowBtn = ({ text, color, bgColor }) => {
  return (
    <div
      className={`${color} ${bgColor}  flex items-center justify-center gap-3 py-2 px-4 cursor-pointer`}
    >
      {text}

      <ArrowRightSvg fill="#191C1F" />
    </div>
  );
};

export default ShopNowBtn;
