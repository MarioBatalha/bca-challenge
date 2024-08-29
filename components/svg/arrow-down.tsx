import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg style={{ maxWidth, maxHeight }} viewBox="0 0 49 49" {...props}>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="tickers" transform="translate(-559.000000, -280.000000)">
        <g id="Group" transform="translate(416.000000, 272.000000)">
          <g
            id="select-arrow-down"
            transform="translate(167.500000, 32.500000) rotate(-360.000000) translate(-167.500000, -32.500000) translate(143.000000, 8.000000)"
          >
            <rect id="Rectangle" x="0" y="0" width="49" height="49"></rect>
            <path
              d="M15.2928932,21.2928932 C15.6533772,20.9324093 16.2206082,20.9046797 16.6128994,21.2097046 L16.7071068,21.2928932 L24.266,28.852 L31.8258536,21.2928932 C32.1863375,20.9324093 32.7535686,20.9046797 33.1458598,21.2097046 L33.2400671,21.2928932 C33.6005511,21.6533772 33.6282806,22.2206082 33.3232557,22.6128994 L33.2400671,22.7071068 L24.973587,30.973587 C24.613103,31.3340709 24.0458719,31.3618005 23.6535807,31.0567756 L23.5593734,30.973587 L15.2928932,22.7071068 C14.9023689,22.3165825 14.9023689,21.6834175 15.2928932,21.2928932 Z"
              id="Path"
              fill="#D6D6CC"
              fillRule="nonzero"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default ArrowDown;
