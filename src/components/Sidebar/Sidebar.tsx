import { useState } from "react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { AiOutlineProfile } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      fontFamily="'Barlow', sans-serif"
      color="#6F6C99"
      pos="absolute"
      h={980}
      backgroundImage="linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)"
      w={navSize === "small" ? "60px" : "250px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex>
        <ArrowLeftIcon
          pos="relative"
          ml="95%"
          mt={130}
          bgColor="#FF409A"
          p={1}
          w={7}
          h={7}
          borderRadius={15}
          onClick={() => {
            if (navSize === "small") setNavSize("large");
            else setNavSize("small");
          }}
        />
        <Flex flexDir="column" mt={200}>
          <Flex>
            <NavItem navSize={navSize} icon={AiOutlineProfile} title="List" />
          </Flex>
          <Flex>
            <NavItem navSize={navSize} icon={FaPaperPlane} title="Messages" />
          </Flex>
          <Flex>
            <NavItem
              navSize={navSize}
              icon={RiAccountPinCircleLine}
              title="Account Settings"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
