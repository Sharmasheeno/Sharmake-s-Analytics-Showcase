import type { SVGProps } from 'react';

export function CredlyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}>
        <path fill="currentColor" d="M12 .25a11.75 11.75 0 1 0 0 23.5a11.75 11.75 0 0 0 0-23.5m4.44 7.23l-6.12 3.42a.5.5 0 0 1-.5 0L3.7 7.48l8.28-4.63a.5.5 0 0 1 .5 0zM3.5 9.07l5.9 3.3a2.5 2.5 0 0 0 2.5 0l5.85-3.28l-3.1 1.74a2.5 2.5 0 0 1-2.5 0zm.2 1.63l8.3 4.63a.5.5 0 0 0 .5 0l8.3-4.63v2.85l-8.29 4.63a.5.5 0 0 1-.5 0L3.7 13.55Z"></path>
    </svg>
  );
}
