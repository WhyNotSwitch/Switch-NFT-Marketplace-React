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
import BaseUrl from "./BaseUrl";
import ProjectDeveloper from "./ProjectDeveloper";

function App() {
  return (
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
  );
}

export default App;
