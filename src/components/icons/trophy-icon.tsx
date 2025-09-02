import type { SVGProps } from 'react';

export function TrophyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path fill="#FFD700" stroke="none" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
        <path fill="#FFFFFF" stroke="none" d="M12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
        <path fill="#FFD700" stroke="none" d="M12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        <path d="M12 8v4l2 1" />
      </g>
      <path fill="#FFD700" d="M17 4h-2l-2-2h-2l-2 2H7c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.5a3.5 3.5 0 1 1 7 0H17c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path fill="#E5C100" d="M12 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      <path fill="#C0A000" d="M10 15h4v2h-4z" />
    </svg>
  );
}
