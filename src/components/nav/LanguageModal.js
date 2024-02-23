import TickSvg from '@/assets/svgs/tick';
import Image from 'next/image';
import React from 'react';

const LanguageModal = ({ lang, setSelectLang, selectLang, setLangIsOpen }) => {
  return (
    <ul className="absolute top-7 -left-32 w-44  p-3 px-2 flex flex-col gap-6 rounded-[3px] bg-white border-[1px] border-gray-100">
      {lang.map(({ image, id, text }) => (
        <li
          key={id}
          className="list-none flex gap-5 items-center justify-between cursor-pointer"
          onClick={() => {
            setSelectLang(id);
            setLangIsOpen(false);
          }}
        >
          <div className="flex gap-3 items-center">
            <Image src={image} alt={text + ' flag'} width={20} height={20} />
            <span
              className={selectLang === id ? 'text-gray-900' : 'text-gray-600'}
            >
              {text}
            </span>
          </div>
          {selectLang === id && <TickSvg color="#FA8232" />}
        </li>
      ))}
    </ul>
  );
};

export default LanguageModal;
