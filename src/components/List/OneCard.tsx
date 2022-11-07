import { Box, Text } from "@chakra-ui/react";
import { Graph } from "../Graph/Graph";

const OneCard = ({ ...coin }: any) => {
  return (
    <Box>
      <Box display="flex" w="100%" mt="5%">
        <Box mr="20%">
          <Box display="flex" mb={10}>
            <Box w={100} mr={50}>
              <img src={coin.image} alt="No" />
            </Box>
            <Box>
              <Text color="#494767" fontSize={64} fontWeight="bold">
                {coin.symbol.toUpperCase()}
              </Text>
            </Box>
          </Box>

          <Box display="flex">
            <Box mr="10%">
              <Box>
                <Text color="white" fontSize={14}>
                  Current prise:
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text fontSize={17} color="#FFFFFF">
                  {coin.current_price.toFixed(3)}
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight="bold"
                  fontSize={11}
                  color={
                    coin.price_change_percentage_24h < 0 ? "#E3507A" : "#50E3C2"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2) + "%"}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={5}>
          <Box>
            <Text color="#494767" fontSize={36} fontWeight="bold">
              Description
            </Text>
          </Box>
          <Box>
            <Text color="white" fontWeight="bold" w="75%">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quos
              modi obcaecati porro sed nisi et molestiae iure inventore
              blanditiis facilis eveniet architecto adipisci culpa corrupti ea
              numquam doloribus fugit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptates laborum distinctio incidunt nesciunt
              dolorem? 
            </Text>
          </Box>
        </Box>
      </Box>
      <Box mt="3%">
        {Graph}
      </Box>
    </Box>
  );
};

export default OneCard;
