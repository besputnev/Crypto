import { Box, Text } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { secondBox, imgBox } from "./ListStyle";
import OneCard from "./OneCard";

export const List = ({ coin }: any) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Link to={`/${coin.id}`}>
            <Box mt={10} mr={5} fontFamily="'Barlow', sans-serif">
              <Box
                sx={secondBox}
                _hover={{
                  backgroundImage:
                    "linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%)",
                }}
              >
                <Box sx={imgBox}>
                  <img width={35} src={coin.image} alt="No" />
                </Box>
                <Box display="flex" ml="20%" mt="10%">
                  <Box mr="20%">
                    <Text fontWeight="bold" fontSize={17} color="#FFFFFF">
                      {coin.current_price.toFixed(3)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={12} fontWeight="bold" color="#494767">
                      {coin.symbol.toUpperCase()}
                    </Text>
                    <Text
                      mt="40%"
                      ml="-50%"
                      fontWeight="bold"
                      fontSize={11}
                      color={
                        coin.price_change_percentage_24h < 0
                          ? "#E3507A"
                          : "#50E3C2"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2) + "%"}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        }
      />
      <Route
        path={`/${coin.id}`}
        element={<OneCard {...coin} authed={true} />}
      />
      <Route path="/" element={<Sidebar />} />
    </Routes>
  );
};
