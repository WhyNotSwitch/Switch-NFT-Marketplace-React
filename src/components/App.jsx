import { Route, Routes } from "react-router-dom";
import Collections from "./Collections";
import Home from "./Home";
import MarketPlace from "./Marketplace";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="marketplace" element={<MarketPlace />}></Route>
      <Route path="collections" element={<Collections />}></Route>
    </Routes>
  );
}

export default App;
