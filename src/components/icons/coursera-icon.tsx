import type { SVGProps } from 'react';

export function CourseraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#0056D2" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M17.2,15.2c-0.3-1-1.1-1.6-2.1-1.6c-1,0-1.8,0.6-2.1,1.6h-2.2V8.8h2.2v2.9c0.6-0.9,1.6-1.4,2.6-1.4c1.8,0,3.2,1.5,3.2,3.4S19,15.2,17.2,15.2z"></path>
      <path fill="#0056D2" d="M8.8,15.2H6.5V8.8h2.2v6.4H8.8z"></path>
    </svg>
  );
}
