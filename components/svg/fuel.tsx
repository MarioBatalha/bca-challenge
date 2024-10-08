import { FC } from 'react';

import { SVGProps } from './svg.types';

const Fuel: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  return (
    <svg style={{ maxHeight, maxWidth }} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 22h12M4 9h10m0 13V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18m10-9h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
      />
    </svg>
  );
};

export default Fuel;
