import React from 'react';

const FacebookSvg = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2537_3527)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0Z"
          fill={color}
        />
        <path
          d="M9.04144 15.9328V9.75225H10.7849L11.016 7.57697H9.04144L9.04437 6.48815C9.04437 5.92079 9.0983 5.61693 9.91372 5.61693H11.0038V3.44128H9.25992C7.16524 3.44128 6.42808 4.49647 6.42808 6.27123V7.57714H5.12231V9.75261H6.42808V15.8452C6.93677 15.9465 7.46267 16 8.00114 16C8.34899 16 8.69648 15.9776 9.04144 15.9328Z"
          fill={color !== '#1B6392' ? '#1B6392' : '#ffffff'}
        />
      </g>
      <defs>
        <clipPath id="clip0_2537_3527">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookSvg;
