import { Route, Routes } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import Collections from "./Collections";
import Home from "./Home";
import MarketPlace from "./Marketplace";
import SigninModal from "./SigninModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="marketplace" element={<MarketPlace />}></Route>
      <Route path="collections" element={<Collections />}></Route>
      <Route path="signin" element={<SigninModal />}></Route>
      <Route path="account-settings" element={<AccountSettings />} />
    </Routes>
  );
}

export default App;
