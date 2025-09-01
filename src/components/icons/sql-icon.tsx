import type { SVGProps } from 'react';

export function SqlIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2a9 9 0 0 0-9 9v2c0 2.89 2.11 5.43 5 6.47V22h8v-2.53c2.89-1.04 5-3.58 5-6.47v-2a9 9 0 0 0-9-9zm0 2c3.86 0 7 2.24 7 5s-3.14 5-7 5s-7-2.24-7-5s3.14-5 7-5zm-5 7v2c0 2.3 1.94 4.22 4.3 4.88c.2-.21.4-.42.6-.64c-.9-.45-1.55-1.02-1.9-1.78c-.34-.75-.4-1.63-.12-2.46H7z"
      ></path>
    </svg>
  );
}
