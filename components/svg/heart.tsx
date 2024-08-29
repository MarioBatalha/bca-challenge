import { FC } from 'react';

import { SVGProps } from './svg.types';

export const Heart: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 19 18"
    fill="none"
    {...props}
  >
    <path
      d="M3.12891 2.66236C5.14439 0.940295 7.73973 1.25414 9.49466 2.7878C11.2476 1.25355 13.8153 0.961966 15.8532 2.65579C18.0834 4.50941 18.3512 7.67071 16.6339 9.88058C15.8515 10.8874 14.1662 12.5123 12.7247 13.8474C11.9943 14.5239 11.3107 15.1403 10.8099 15.5875C10.5594 15.8111 10.3544 15.9926 10.2119 16.1184C10.1406 16.1813 10.085 16.2302 10.047 16.2635L9.98844 16.3148L9.49495 16.746L9.00116 16.3146L9.00039 16.3139L8.94289 16.2635C8.90494 16.2302 8.84927 16.1813 8.778 16.1184C8.63547 15.9926 8.43048 15.8111 8.17999 15.5875C7.67919 15.1403 6.99563 14.5239 6.26523 13.8474C4.82372 12.5123 3.13845 10.8874 2.35603 9.88058C0.63207 7.66219 0.948817 4.52508 3.12891 2.66236Z"
      strokeWidth="1"
      stroke="#E0E0D7"
    />
  </svg>
);

export default Heart;
