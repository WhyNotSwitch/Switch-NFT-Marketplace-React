import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";
import SigninBody from "../JSX/SigninBody";

function SigninModal() {
  return (
    <BaseLayout navProp={{ style: { paddingBottom: "90px" } }}>
      <SigninBody />
      <BacktoTop />
    </BaseLayout>
  );
}

export default SigninModal;
