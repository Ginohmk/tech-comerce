'use client';

import CancelSvg from '@/assets/svgs/cancel';
import LogoSvg from '@/assets/svgs/logo';
import PhoneSvg from '@/assets/svgs/phone';
import SearchSvg from '@/assets/svgs/search';
import ShopCartSvg from '@/assets/svgs/shop-cart';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  desktopCurrencyData,
  desktopLangData,
  menuLinksData,
  mobileCategoryData,
  socialLinksData,
} from './util';
import { useRouter } from 'next/navigation';
import CaratDownSvg from '@/assets/svgs/carat-down';
import LanguageModal from './LanguageModal';
import CaratUpSvg from '@/assets/svgs/carat-up';
import CurrencyModal from './CurrencyModal';
import MobileMenu from './MobileMenu';

const NavSection = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [lang, setLang] = useState([...desktopLangData]);
  const [selectLang, setSelectLang] = useState(0);
  const [langIsOpen, setLangIsOpen] = useState(false);

  const [currency, setCurrency] = useState([...desktopCurrencyData]);
  const [selectCurrency, setSelectCurrency] = useState(0);
  const [currencyIsOpen, setCurrencyIsOpen] = useState(false);

  const handleSearchInput = (event) => {
    let keyValue = event.key;

    if (keyValue === 'Enter') {
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search
  };

  return (
    <>
      <section className="bg-secondary-700 px-5 py-4">
        {/* Mobile view */}
        <section className="md:hidden  flex flex-col gap-8">
          <section className="flex items-center justify-between">
            {/* Mobile view (Logo) */}
            <div className="flex items-center gap-4">
              <LogoSvg />
              <span className="text-white font-semibold text-2xl">CLICON</span>
            </div>

            {/* Mobile view  (Store cart ,  Menu )*/}
            <section className="flex item-center gap-8">
              <div className="relative ">
                <span className="absolute -right-1 -top-1 bg-white w-5 h-5 rounded-full text-xs flex items-center justify-center text-secondary-700">
                  2
                </span>
                <ShopCartSvg color="#ffffff" />
              </div>

              {/* ---Menu */}
              <div
                className="mt-1 w-9 flex flex-col gap-1"
                onClick={() => setMobileMenu(true)}
              >
                <span className="h-1 w-full bg-white rounded-md"></span>
                <span className="h-1 w-full bg-white rounded-md"></span>
                <span className="h-1 w-full bg-white rounded-md"></span>
              </div>
            </section>
          </section>

          {/* Search section */}
          <form
            onSubmit={(e) => handleSearch(e)}
            className="w-full  h-12 flex items-center gap-4 bg-white rounded-sm pr-3 "
          >
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => handleSearchInput(e)}
              name="search"
              className="h-full flex-1 pl-2 bg-white border-none  focus:outline-none focus:bg-white active:outline-none active:bg-white "
            />
            <button type="submit">
              <SearchSvg color="#191C1F" />
            </button>
          </form>
        </section>

        {/* Desktop  */}
        <section className="max-width-center hidden md:block">
          {/* Desktop/Tablet  welcome  */}
          <div className="flex items-center justify-between gap-4">
            <span className="text-white text-base w-1/2">
              Welcome to Clicon online eCommerce store.
            </span>

            <div className="flex items-center justify-between gap-4">
              {/* Socail links */}
              <div className="flex items-center gap-3">
                <span className="text-white text-base">Follow us:</span>

                <ul className="flex gap-4 items-center">
                  {socialLinksData.map(({ id, svg, link }) => (
                    <li key={id} className="list-none">
                      <Link href={link} target="_blank">
                        {svg('#ffffff')}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <span className="h-11 w-[1px] bg-white opacity-30"></span>

              {/* Language and Currency */}
              <div className="flex items-center gap-7 relative">
                {/* ---Language */}
                <div
                  className="flex items-center gap-3 "
                  onClick={() => setLangIsOpen((prevState) => !prevState)}
                >
                  <span className="text-white">
                    {lang[`${selectLang}`]?.value}
                  </span>

                  {/* Switch caret up or down when open or close */}
                  {!langIsOpen ? (
                    <CaratDownSvg color="#ffffff" />
                  ) : (
                    <CaratUpSvg color="#ffffff" />
                  )}
                </div>

                {/* ---Currency */}
                <div
                  className="flex items-center gap-3"
                  onClick={() => setCurrencyIsOpen((prevState) => !prevState)}
                >
                  <span className="text-white">
                    {currency[`${selectCurrency}`]?.value}
                  </span>

                  {/* Switch caret up or down when open or close */}
                  {!currencyIsOpen ? (
                    <CaratDownSvg color="#ffffff" />
                  ) : (
                    <CaratUpSvg color="#ffffff" />
                  )}
                </div>

                {/* Language Modal */}
                {langIsOpen && (
                  <LanguageModal
                    lang={lang}
                    setSelectLang={setSelectLang}
                    selectLang={selectLang}
                    setLangIsOpen={setLangIsOpen}
                  />
                )}

                {/* Currency Modal */}
                {currencyIsOpen && (
                  <CurrencyModal
                    currency={currency}
                    setSelectCurrecy={setSelectCurrency}
                    selectCurrecy={selectCurrency}
                    setCurrencyIsOpen={setCurrencyIsOpen}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Mobile menu content */}
      <MobileMenu
        setMobileMenu={setMobileMenu}
        mobileMenu={mobileMenu}
        lang={lang}
        currency={currency}
        setSelectCurrecy={setSelectCurrency}
      />
    </>
  );
};

export default NavSection;
