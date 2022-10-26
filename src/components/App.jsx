import { Route, Routes } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import Collections from "./Collections";
import Home from "./Home";
import MarketPlace from "./Marketplace";
import MyItems from "./MyItems";
import SigninModal from "./SigninModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="collections" element={<Collections />} />
      <Route path="signin" element={<SigninModal />}></Route>
      <Route path="account-settings" element={<AccountSettings />} />
      <Route path="my-items" element={<MyItems />}></Route>
    </Routes>
  );
}

export default App;
