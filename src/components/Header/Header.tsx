import { Box, Button, Text, Avatar } from "@chakra-ui/react";
import { DragHandleIcon, BellIcon } from "@chakra-ui/icons";
import "./Input.scss";

const Header = () => {
  return (
    <Box ml="18%" mr="2%" display="flex" justifyContent="space-between">
      <Box>
        <Box
          fontSize={30}
          color="white"
          fontWeight="bold"
          fontFamily="'Barlow', sans-serif"
        >
          List
        </Box>
        <Box>
          <Text color="#5B5A99" fontSize={13} fontFamily="'Barlow', sans-serif">
            With all of the styling tool options available in today's market
          </Text>
        </Box>
      </Box>
      <Box display="flex" mt="1%">
        <div className="container">
          <form className="search-box">
            <input type="text" />
            <span></span>
          </form>
        </div>
        <Box mr={20}>
          <DragHandleIcon color="#5B5A99" w={7} h={7} />
        </Box>
        <Box mr={20}>
          <Button
            border={1}
            borderRadius={15}
            w="100%"
            h={7}
            bgGradient="linear(to-l, #FF409A, #C438EF)"
            boxShadow="0px 4px 31px #BA1358"
          >
            <BellIcon color="white" />
            <Text fontFamily="'Barlow', sans-serif" fontSize={12} color="white">
              15
            </Text>
          </Button>
        </Box>
        <Avatar mt="-2.5%" mr={5} />
        <Box fontSize={13} fontFamily="'Barlow', sans-serif">
          <button>
            <Text color="#5B5A99">Pixelz Warrios</Text>
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
