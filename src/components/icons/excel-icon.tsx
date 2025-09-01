import type { SVGProps } from 'react';

export function ExcelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 2h20v20H2z"
        style={{
          fill: 'transparent',
        }}
      ></path>
      <path
        fill="#107c41"
        d="M21.16,3.42,13.4,2.18a2.38,2.38,0,0,0-.78,0L4.84,3.42A2.33,2.33,0,0,0,3,5.65v12.7a2.33,2.33,0,0,0,1.84,2.23l7.76,1.24a2.38,2.38,0,0,0,.78,0l7.76-1.24A2.33,2.33,0,0,0,23,18.35V5.65A2.33,2.33,0,0,0,21.16,3.42Z"
      ></path>
      <path
        fill="#fff"
        d="M15.4,8.18l-2.72,5.1,2.72,5.1H13.23l-1.63-3.23-1.7,3.23H7.72l2.71-5.1L7.72,8.18h2.17l1.63,3.23L13.23,8.18Z"
      ></path>
    </svg>
  );
}
