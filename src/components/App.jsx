import { Route, Routes } from "react-router-dom";
import AccountSettings from "./Pages/AccountSettings";
import Collections from "./Pages/Collections";
import Home from "./Pages/Home";
import MarketPlace from "./Pages/Marketplace";
import MyCollections from "./JSX/MyCollections";
import MyItems from "./JSX/MyItems";
import Notifications from "./JSX/Notifications";
import Favorites from "./JSX/Favorites";
import SigninModal from "./Pages/SigninModal";
import SignOut from "./Pages/SignOut";
import SingleBuy from "./Pages/SingleBuy";
import ProjectDeveloper from "./Pages/ProjectDeveloper";

import { Web3Provider } from "./Web3/provider";

function App() {
  return (
    <Web3Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/signin" element={<SigninModal />}></Route>
        <Route
          path="/account-settings"
          element={<AccountSettings />}
        />
        <Route path="/my-items" element={<MyItems />}></Route>
        <Route path="/my-collections" element={<MyCollections />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signout" element={<SignOut />}></Route>
        <Route
          path="/marketplace/single-buy"
          element={<SingleBuy />}
        ></Route>
        <Route
          path="/project-developer"
          element={<ProjectDeveloper />}
        />
      </Routes>
    </Web3Provider>
  );
}

export default App;
