import { Route, Routes } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import Collections from "./Collections";
import Home from "./Home";
import MarketPlace from "./Marketplace";
import MyCollections from "./MyCollections";
import MyItems from "./MyItems";
import Notifications from "./Notifications";
import Favorites from "./Favorites";
import SigninModal from "./SigninModal";
import SignOut from "./SignOut";
import SingleBuy from "./SingleBuy";
import ProjectDeveloper from "./ProjectDeveloper";

function App() {
  return (
    <Routes>
      <Route path="/Switch-NFT-Marketplace-React" element={<Home />}></Route>
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="collections" element={<Collections />} />
      <Route path="signin" element={<SigninModal />}></Route>
      <Route path="account-settings" element={<AccountSettings />} />
      <Route path="my-items" element={<MyItems />}></Route>
      <Route path="my-collections" element={<MyCollections />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="signout" element={<SignOut />}></Route>
      <Route path="single-buy" element={<SingleBuy />}></Route>
      <Route path="project-developer" element={<ProjectDeveloper />} />
    </Routes>
  );
}

export default App;
