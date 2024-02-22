'use client';

import React, { useState } from 'react';
import ShopNowBtn from '../shop-now-btn/ShopNowBtn';
import CancelSvg from '@/assets/svgs/cancel';

const PromoHead = () => {
  const [showPromo, setShowPromo] = useState(true);
  return (
    <>
      {showPromo && (
        <section className="bg-gray-900 px-5 py-4 ">
          <div className="max-width-center flex flex-col gap-6  relative md:flex-row ">
            {/* Black Friday Container */}
            <div className="flex gap-4 items-center md:w-1/4 md:justify-start">
              <span className="bg-warning-300 text-gray-900 text-sm p-1 -rotate-12">
                Black
              </span>
              <span className="text-white">Friday</span>
            </div>

            {/* Off Price Conatiner*/}
            <section className="flex item-center  justify-between gap-7 md:w-1/2  ">
              <div className="flex items-center gap-2">
                <span className="text-white">Up to</span>
                <span className="text-warning-500 text-3xl font-semibold">
                  59%
                </span>
                <span className="text-white font-semibold">OFF</span>
              </div>

              {/* Button show more */}
              <ShopNowBtn
                color="text-gray-900"
                bgColor="bg-warning-500"
                text="Shop Now"
              />
            </section>

            {/* Close  */}
            <div className="absolute  right-4 md:w-1/4 flex justify-end md:relative md:right-0">
              <div
                className="cursor-pointer py-2 px-2 bg-gray-800  md:self-end  md:flex  md:items-center  md:justify-end"
                onClick={() => setShowPromo(false)}
              >
                <CancelSvg color="#ffffff" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PromoHead;
