import type { SVGProps } from 'react';

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          fill="#3776AB"
          d="M11.5 14.5a2.5 2.5 0 0 1-5 0v-9a2.5 2.5 0 0 1 5 0v2h-2v-2a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-2h2v2Z"
        ></path>
        <path
          fill="#FFD43B"
          d="M12.5 9.5a2.5 2.5 0 0 1 5 0v9a2.5 2.5 0 0 1-5 0v-2h2v2a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-1 0v2h-2v-2Z"
        ></path>
        <path
          fill="#fff"
          d="M8.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm7 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
        ></path>
      </g>
    </svg>
  );
}
