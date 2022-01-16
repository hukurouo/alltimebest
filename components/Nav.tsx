import {
  Box,
  Flex,
  Button,
  Text,
  Stack,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link'

export function Nav({page}:{page: string}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const activeColor = useColorModeValue('teal.500', 'teal.500')
  const inActiveColor = useColorModeValue('gray.600', 'gray.400')
  const WhatColor = (page: string, type: string) => {
    if (page == type) {
      return activeColor
    } else {
      return inActiveColor
    }
  }
  return (
    <>
      <Box pt={4}>
        <Flex h={16} justify='center' align='center'>
          <Stack direction={'row'} spacing={4} alignItems={'center'}>
            <Link href='/'>
              <a><Text as="b" color={WhatColor(page, "top")} >{"TOP"}</Text></a>
            </Link>
            <Link href='/create'>
              <a><Text as="b" color={WhatColor(page, "create")} >{"ページ作成"}</Text></a>
            </Link>
            <Link href='/'>
              <a><Text as="b" color={WhatColor(page, "search")} >{"検索"}</Text></a>
            </Link>
            <Box>
            <Button onClick={toggleColorMode} ml={2} mr={0} width={10}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <hr></hr>
    </>
  );
}