import React from 'react';

const HeartLikeSvg = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M12.5344 19.8656L20.1281 12.2719C21.9938 10.3969 22.2656 7.33126 20.5031 5.37188C20.0611 4.87811 19.5231 4.47965 18.9219 4.20084C18.3206 3.92203 17.6689 3.76872 17.0064 3.7503C16.344 3.73187 15.6847 3.84871 15.0689 4.09367C14.4532 4.33863 13.8938 4.70657 13.425 5.17501L12 6.60938L10.7719 5.37188C8.89688 3.50626 5.83126 3.23438 3.87188 4.99688C3.37811 5.4389 2.97965 5.97695 2.70084 6.57816C2.42203 7.17938 2.26872 7.83112 2.2503 8.49358C2.23187 9.15604 2.34871 9.8153 2.59367 10.4311C2.83863 11.0469 3.20657 11.6062 3.67501 12.075L11.4656 19.8656C11.6078 20.0065 11.7999 20.0855 12 20.0855C12.2001 20.0855 12.3922 20.0065 12.5344 19.8656V19.8656Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HeartLikeSvg;
