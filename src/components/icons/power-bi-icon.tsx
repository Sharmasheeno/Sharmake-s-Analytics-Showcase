import type { SVGProps } from 'react';

export function PowerBiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M4 4h16v16H4z" style={{ fill: 'transparent' }}></path>
      <path fill="#f2c811" d="M12.51,2.09,4,4.22V19.78l8.51,2.13a.5.5,0,0,0,.19,0l8.31-2.08V2.09Z"></path>
      <path fill="#212121" d="M13,3v8H4V4.5A.5.5,0,0,1,4.5,4Z"></path>
      <path fill="#212121" d="M13,21V13H4v6.5a.5.5,0,0,0,.5.5Z"></path>
      <path fill="#000" d="M21,11H13V3h7.5a.5.5,0,0,1,.5.5Z"></path>
      <path fill="#212121" d="M21,13H13v8h7.5a.5.5,0,0,0,.5-.5Z"></path>
    </svg>
  );
}
