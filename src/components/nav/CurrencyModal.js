import TickSvg from '@/assets/svgs/tick';
import Image from 'next/image';
import React from 'react';

const CurrencyModal = ({
  currency,
  setSelectCurrecy,
  selectCurrecy,
  setCurrencyIsOpen,
}) => {
  return (
    <ul className="absolute top-7 -left-16 w-52  p-3 px-4 flex flex-col gap-6 rounded-[3px] bg-white border-[1px] border-gray-100">
      {currency.map(({ id, text }) => (
        <li
          key={id}
          className="list-none flex gap-5 items-center justify-between cursor-pointer"
          onClick={() => {
            setSelectCurrecy(id);
            setCurrencyIsOpen(false);
          }}
        >
          <div className="flex gap-3 items-center">
            <span
              className={
                selectCurrecy === id ? 'text-primary-500' : 'text-gray-600'
              }
            >
              {text}
            </span>
          </div>
          {selectCurrecy === id && <TickSvg color="#FA8232" />}
        </li>
      ))}
    </ul>
  );
};

export default CurrencyModal;
