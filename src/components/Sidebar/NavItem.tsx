import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

const NavItem = ({ navSize, title, icon }: any) => {
  return (
    <Flex
      ml={navSize === "large" ? "-220%" : "-380%"}
      mt={navSize === "large" ? "20%" : "20%"}
      flexDir="column"
      w="200%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          href={
            title === "List"
              ? "/"
              : title === "Messages"
              ? "/Messages"
              : title === "Account Settings"
              ? "/Account Settings"
              : "/"
          }
        >
          <MenuButton w="100%">
            <Flex>
              <Icon mt="5%" as={icon} fontSize="xl" color="gray.500" />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
