import FavoritesBody from "./FavoritesBody";
import Footer from "../Common/Footer";
import NavBar from "../Common/Nav";
import PageTitle from "../Common/PageTitle";

function Favorites() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <div>
      <NavBar style={myStyle} />
      <PageTitle />
      <FavoritesBody />
      <Footer />
    </div>
  );
}

export default Favorites;
