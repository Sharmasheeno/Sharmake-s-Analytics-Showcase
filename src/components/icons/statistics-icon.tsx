import type { SVGProps } from 'react';

export function StatisticsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
        <path fill="#4285F4" d="M5 20v-8h4v8H5zm6 0V4h4v16h-4zm6 0v-5h4v5h-4z"></path>
    </svg>
  );
}
