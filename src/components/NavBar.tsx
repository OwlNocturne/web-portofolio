import { ReactNode } from 'react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    HStack,
    Link,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

const Links = ['About', 'Projects', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={2}
      py={1}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <nav>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Portofolio</Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

            </Box>

        </nav>
    );
}