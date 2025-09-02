import type { SVGProps } from 'react';

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#FF0000" d="M21.582 7.643A2.46 2.46 0 0 0 19.83 5.89a53.21 53.21 0 0 0-7.83-0.42a53.21 53.21 0 0 0-7.83 0.42a2.46 2.46 0 0 0-1.752 1.753A25.62 25.62 0 0 0 2 12a25.62 25.62 0 0 0 0.42 4.357a2.46 2.46 0 0 0 1.752 1.753c1.9.32 7.83 0.42 7.83 0.42s5.93-0.1 7.83-0.42a2.46 2.46 0 0 0 1.752-1.753A25.62 25.62 0 0 0 22 12a25.62 25.62 0 0 0-0.418-4.357zM9.75 15.19V8.81L15.42 12L9.75 15.19z"></path>
    </svg>
  );
}
