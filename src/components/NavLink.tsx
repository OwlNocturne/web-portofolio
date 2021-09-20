import { Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-scroll";

type NavLinkProps = {
    displayText: string;
    toID: string;
    key: string;
};

export default function NavLink({ navLink }: { navLink: NavLinkProps }) {
    return (
        <Box
            px={2}
            py={1}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
        >
            <Link
                activeClass="active"
                to={navLink.toID}
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
            >
                {navLink.displayText}
            </Link>
        </Box>
    );
}
