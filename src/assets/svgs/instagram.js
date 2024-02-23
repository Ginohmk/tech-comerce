import React from 'react';

const InstagramSvg = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2537_3538)">
        <path
          d="M5.60062 8C5.60062 6.67457 6.67485 5.59981 8.00034 5.59981C9.32582 5.59981 10.4006 6.67457 10.4006 8C10.4006 9.32544 9.32582 10.4002 8.00034 10.4002C6.67485 10.4002 5.60062 9.32544 5.60062 8ZM4.30308 8C4.30308 10.0419 5.95833 11.6971 8.00034 11.6971C10.0423 11.6971 11.6976 10.0419 11.6976 8C11.6976 5.95808 10.0423 4.30289 8.00034 4.30289C5.95833 4.30289 4.30313 5.95797 4.30313 8H4.30308ZM10.98 4.1563C10.9799 4.32718 11.0305 4.49425 11.1254 4.63637C11.2203 4.77849 11.3552 4.88929 11.5131 4.95474C11.6709 5.0202 11.8446 5.03738 12.0122 5.00411C12.1799 4.97084 12.3339 4.88861 12.4547 4.76783C12.5756 4.64704 12.658 4.49313 12.6914 4.32554C12.7248 4.15795 12.7078 3.98423 12.6424 3.82632C12.5771 3.66842 12.4664 3.53344 12.3243 3.43845C12.1823 3.34345 12.0153 3.29271 11.8444 3.29264H11.844C11.615 3.29275 11.3953 3.38376 11.2333 3.5457C11.0713 3.70763 10.9802 3.92724 10.98 4.1563ZM5.09142 13.8607C4.38942 13.8287 4.00786 13.7118 3.7543 13.613C3.41813 13.4821 3.17828 13.3263 2.92609 13.0744C2.67391 12.8226 2.51781 12.583 2.38751 12.2469C2.28867 11.9934 2.17173 11.6118 2.13982 10.9098C2.10491 10.1508 2.09794 9.92286 2.09794 8.00012C2.09794 6.07737 2.10549 5.85003 2.13982 5.09045C2.17179 4.38848 2.28959 4.00757 2.38751 3.75339C2.51838 3.41723 2.67425 3.17739 2.92609 2.92521C3.17793 2.67304 3.41756 2.51694 3.7543 2.38665C4.00775 2.28781 4.38942 2.17088 5.09142 2.13897C5.85039 2.10407 6.07838 2.0971 8.00034 2.0971C9.92229 2.0971 10.1505 2.10453 10.9101 2.13909C11.6121 2.17106 11.993 2.28885 12.2472 2.38677C12.5834 2.51706 12.8233 2.6735 13.0754 2.92533C13.3276 3.17716 13.4832 3.41735 13.614 3.7535C13.7129 4.00694 13.8298 4.3886 13.8617 5.09057C13.8966 5.85014 13.9036 6.07749 13.9036 8.00023C13.9036 9.92298 13.8966 10.1503 13.8617 10.9099C13.8297 11.6119 13.7122 11.9934 13.614 12.247C13.4832 12.5831 13.3273 12.823 13.0754 13.0746C12.8236 13.3262 12.5834 13.4823 12.2472 13.6131C11.9938 13.712 11.6121 13.8289 10.9101 13.8608C10.1511 13.8957 9.92316 13.9027 8.00034 13.9027C6.07751 13.9027 5.85016 13.8957 5.09142 13.8608V13.8607ZM5.0318 0.843606C4.26529 0.878512 3.74151 1.00005 3.28409 1.17803C2.81066 1.36183 2.40934 1.60842 2.0086 2.00851C1.60786 2.4086 1.3619 2.80996 1.17809 3.28395C1.0001 3.74164 0.878561 4.2651 0.843654 5.03159C0.808171 5.79928 0.800049 6.04471 0.800049 8C0.800049 9.95529 0.808171 10.2007 0.843654 10.9684C0.878561 11.735 1.0001 12.2584 1.17809 12.7161C1.3619 13.1895 1.60792 13.5916 2.0086 13.9915C2.40928 14.3914 2.81008 14.6377 3.28409 14.822C3.74237 15 4.26529 15.1215 5.0318 15.1564C5.79993 15.1913 6.04497 15.2 8.00034 15.2C9.9557 15.2 10.2011 15.1919 10.9689 15.1564C11.7354 15.1215 12.2589 15 12.7166 14.822C13.19 14.6377 13.5913 14.3916 13.9921 13.9915C14.3928 13.5914 14.6383 13.1895 14.8226 12.7161C15.0006 12.2584 15.1227 11.7349 15.157 10.9684C15.1919 10.2002 15.2 9.95529 15.2 8C15.2 6.04471 15.1919 5.79928 15.157 5.03159C15.1221 4.26505 15.0006 3.74135 14.8226 3.28395C14.6383 2.81053 14.3922 2.40923 13.9921 2.00851C13.592 1.60779 13.19 1.36183 12.7172 1.17803C12.2589 1.00005 11.7354 0.877936 10.9694 0.843606C10.2016 0.808528 9.95628 0.800003 8.0012 0.800003C6.04612 0.800003 5.80022 0.808125 5.03209 0.843606"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2537_3538">
          <rect width="16" height="16" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InstagramSvg;
