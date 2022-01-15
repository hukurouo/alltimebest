import { Menu, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
export function MenuComponent() {
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          width={10}
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem command='⌘T'>
            New Tab
          </MenuItem>
          <MenuItem  command='⌘N'>
            New Window
          </MenuItem>
          <MenuItem  command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem  command='⌘O'>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}