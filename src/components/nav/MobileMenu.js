'use client';

import React, { useState } from 'react';
import { menuLinksData, mobileCategoryData, socialLinksData } from './util';
import CancelSvg from '@/assets/svgs/cancel';
import Link from 'next/link';
import PhoneSvg from '@/assets/svgs/phone';

const MobileMenu = ({
  mobileMenu,
  setMobileMenu,
  lang,
  selectLang,
  currency,
  selectCurrency,
}) => {
  const [categoryValue, setCategoryValue] = useState('allCategory');
  return (
    <>
      {mobileMenu && (
        <section className=" md:hidden bg-white pt-6 px-4 fixed top-0 right-0 left-0 h-full overflow-y-scroll flex flex-col gap-6">
          {/* Mobile-view content (Close menu) */}
          <div
            className="flex justify-end"
            onClick={() => setMobileMenu(false)}
          >
            <CancelSvg color="#191C1F" />
          </div>

          {/* Mobile-view content (Welcome) */}
          <span className="text-center">
            {' '}
            Welcome to Clicon online eCommerce store.
          </span>

          {/* Mobile-view content (Category drop down) */}
          <ul className="flex flex-col gap-9">
            <li className="bg-gray-50  max-w-44  rounded-sm list-none">
              <select
                className="p-3 pl-0 bg-gray-50 border-none focus:outline-none text-xl"
                onChange={(e) => {
                  setCategoryValue(e.target.value);
                  setMobileMenu(false);
                }}
                value={categoryValue}
              >
                <option value="allCategory" defaultValue="allCategory">
                  All category
                </option>
                {mobileCategoryData.map(({ name, value, id }) => (
                  <option key={id} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </li>
            {/* Menu links */}
            {menuLinksData.map(({ text, id, link, svg }) => (
              <li
                className="flex gap-4 items-end list-none"
                onClick={() => {
                  setMobileMenu(false);
                  router.push(`${link}`);
                }}
                key={id}
              >
                {svg}
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Mobile-view content (Language drop down) */}
          <div className="mt-5 flex gap-10 ">
            <div className=" bg-gray-100  w-24  rounded-sm list-none">
              <select
                className="p-3 pl-0 bg-gray-100 border-none focus:outline-none text-xl"
                onChange={(e) => {
                  setMobileMenu(false);
                }}
                value={lang[`${selectLang}`]?.value}
              >
                <option value="Eng"> English </option>
                <option value="Mdr"> Mandarin </option>
                <option value="Rus"> Russian </option>
              </select>
            </div>

            {/* Mobile-view content (Currency drop down) */}
            <div className="bg-gray-100 w-24 rounded-sm list-none">
              <select
                className="p-3 pl-0 bg-gray-100 border-none focus:outline-none text-xl"
                onChange={() => setMobileMenu(false)}
                value={currency[`${selectCurrency}`]?.value}
              >
                <option value="USD"> Dollar (USD) </option>
                <option value="Eur"> Euro (EUR) </option>
              </select>
            </div>
          </div>

          {/* Mobile-view content (Follow us) */}
          <div className="flex flex-col gap-5 mt-3">
            <span className="text-xl">Follow us:</span>

            {/* Social link */}
            <ul className="flex gap-5">
              {socialLinksData.map(({ id, link, svg }) => (
                <li
                  key={id}
                  className="list-none"
                  onClick={() => setMobileMenu(false)}
                >
                  <Link href={link} target="_blank">
                    {svg('#1B6392')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile-view content (Call us) */}
          <Link
            href="tel:+12025550104"
            className="flex items-center gap-5 mt-3"
            onClick={() => setMobileMenu(false)}
          >
            <PhoneSvg color="#1B6392" />
            <span>+1-202-555-0104</span>
          </Link>
        </section>
      )}
    </>
  );
};

export default MobileMenu;
