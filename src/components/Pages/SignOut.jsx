import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";
import SignoutBody from "../JSX/SignoutBody";

function SignOut() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={{ style: myStyle }}>
      <SignoutBody />
      <BacktoTop />
    </BaseLayout>
  );
}

export default SignOut;
