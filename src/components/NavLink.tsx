import { ReactNode } from 'react';
import {
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

export default function NavLink({ children }: { children: ReactNode }) {
    return (
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
    )
}