import { Div, H1 } from "@stylin.js/elements"
import Dropdown from "../dropdown"
import { FC } from "react"
import { SortProps } from "./sort.types"

export const Sort:FC<SortProps> = ({ label, menuItems, defaultValue, onSelect }) => {
  return (
    <Div
    gap="0.5rem"
    width="100%"
    display="flex"
    alignItems="flex-start"
    flexDirection="column"
    justifyContent="flex-start"
  >
    <H1 color="#5F5F5B" fontWeight="400" fontSize="1rem">
      {label}:
    </H1>
    <Dropdown
      menuItems={menuItems}
      defaultValue={defaultValue}
      onSelect={onSelect}
    />
  </Div>
  )
}