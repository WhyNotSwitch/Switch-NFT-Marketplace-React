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
import BaseUrl from "./Common/BaseUrl";
import ProjectDeveloper from "./Pages/ProjectDeveloper";

import { Web3Provider } from "./Web3/provider";

function App() {
  return (
    <Web3Provider>
      <Routes>
        <Route path={BaseUrl} element={<Home />} />
        <Route path={`${BaseUrl}/marketplace`} element={<MarketPlace />} />
        <Route path={`${BaseUrl}/collections`} element={<Collections />} />
        <Route path={`${BaseUrl}/signin`} element={<SigninModal />}></Route>
        <Route
          path={`${BaseUrl}/account-settings`}
          element={<AccountSettings />}
        />
        <Route path={`${BaseUrl}/my-items`} element={<MyItems />}></Route>
        <Route path={`${BaseUrl}/my-collections`} element={<MyCollections />} />
        <Route path={`${BaseUrl}/notifications`} element={<Notifications />} />
        <Route path={`${BaseUrl}/favorites`} element={<Favorites />} />
        <Route path={`${BaseUrl}/signout`} element={<SignOut />}></Route>
        <Route
          path={`${BaseUrl}/marketplace/single-buy`}
          element={<SingleBuy />}
        ></Route>
        <Route
          path={`${BaseUrl}/project-developer`}
          element={<ProjectDeveloper />}
        />
      </Routes>
    </Web3Provider>
  );
}

export default App;
