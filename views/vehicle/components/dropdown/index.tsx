import { Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { ArrowDownSVG } from '@/components/svg';

import { DropdownProps } from './dropdown.types';

const Dropdown: FC<DropdownProps> = ({ onSelect, defaultValue, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (value: string) => {
    onSelect(value);
    setIsDropdownOpen(false);
  };
  return (
    <Div position="relative" width="100%">
      <Button
        p="0.5rem"
        mr="0.5rem "
        height="2rem"
        display="flex"
        color="#353A3E"
        fontSize="1rem"
        alignItems="center"
        background="#FFFFFF"
        borderRadius="0.25rem"
        textTransform="capitalize"
        border="1px solid #E0E0D7"
        justifyContent="space-between"
        cursor="pointer"
        width="100%"
        textAlign={['left', 'left', 'left', 'right']}
        boxShadow="inset 1px 1px 0 0 rgba(255, 255, 255, 0.80"
        backgroundImage="linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%)"
        onClick={toggleDropdown}
      >
        {defaultValue}
        <Div
          height="2rem"
          display="flex"
          width="2rem"
          alignItems="center"
          justifyContent="center"
          borderLeft="1px solid #E0E0D7"
        >
          <ArrowDownSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
      </Button>
      {isDropdownOpen && (
        <Div
          my="0.5rem"
          zIndex={999}
          bg="#FFFFFF"
          width="100%"
          maxHeight="32rem"
          overflowY="auto"
          position="absolute"
          borderRadius="0.25rem"
          border="1px solid #E0E0D7"
        >
          {menuItems.map((value: string | number) => (
            <Div
              p="0.5rem"
              key={v4()}
              height="2rem"
              display="flex"
              color="#353A3E"
              fontSize="1rem"
              alignItems="flex-start"
              textTransform="capitalize"
              borderBottom="1px solid #E0E0D7"
              justifyContent="flex-start"
              nHover={{
                backgroundColor: '#d6d6cc',
                transition: 'all 0.5s ease-in-out',
              }}
              onClick={() => handleMenuItemClick(value)}
            >
              {value}
            </Div>
          ))}
        </Div>
      )}
    </Div>
  );
};

export default Dropdown;
