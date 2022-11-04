import Footer from "./Footer";
import NavBar from "./Nav";

function BaseLayout({ children, navProp, footerProp }) {
  return (
    <>
      <NavBar {...navProp} />
      {children}
      <Footer {...footerProp} />
    </>
  );
}

export default BaseLayout;
