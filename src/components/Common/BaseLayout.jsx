import Footer from "./Footer";
import NavBar from "./Nav";

function BaseLayout({ children, navProp, footerProp }) {
  return (
    <>
      <NavBar style={navProp} />
      {children}
      <Footer className={footerProp} />
    </>
  );
}

export default BaseLayout;
