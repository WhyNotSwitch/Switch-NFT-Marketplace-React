import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";
import SignoutBody from "../JSX/SignoutBody";

function SignOut() {
  return (
    <BaseLayout navProp={{ style: { paddingBottom: "90px" } }}>
      <SignoutBody />
      <BacktoTop />
    </BaseLayout>
  );
}

export default SignOut;
