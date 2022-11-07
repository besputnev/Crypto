import { useEffect, useCallback } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { List } from "./components/List/List";
import { Box } from "@chakra-ui/react";
import { getCoins } from "./store/coinSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

export default function App() {
  const { coins } = useAppSelector(state => state.coin)
  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    await dispatch(getCoins());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => initApp(), 5000);
    initApp();
  }, []);

  return (
    <Box
      h={980}
      w="100%"
      bgGradient="radial(123.22% 129.67% at 100.89% -5.6%, #201D47 0%, #17153A 100%)"
      display="flex"
    >
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Header />

        <Box ml="18%" maxW="60%" display="flex" flexWrap="wrap">
          {coins && coins.map((coin) => (
            <List
              key={coin.id}
              coin={coin}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
