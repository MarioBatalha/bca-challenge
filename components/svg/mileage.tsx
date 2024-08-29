import { FC } from 'react';

import { SVGProps } from './svg.types';

const Mileage: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 60 60"
      fill="none"
      {...props}
    >
      <path
        d="M10.7375 17.375V54.375H34.3625V25.625H10.7375"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.73755 54.375H37.2375"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7375 12.75V5.625H19.8625"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9875 5.625H34.3625V25.75"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.3625 25.625C34.9875 24.5 36.1125 23.125 37.6125 23.125C39.3625 23.125 41.2376 24 41.2376 27.625C41.2376 29 41.2376 38.25 41.6126 40C41.9876 41.75 42.9876 44.875 46.8626 44.875C50.9876 44.875 52.4876 39.75 52.2376 37.25C51.6853 32.6698 50.8926 28.1219 49.8625 23.625C48.9875 19.375 45.3626 15 44.9876 12.75C44.3329 10.505 43.0281 8.50419 41.2376 7C40.5374 6.49927 39.7826 6.0799 38.9875 5.75"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Mileage;
