import BaseLayout from "../Common/BaseLayout";
import BacktoTop from "../JSX/BacktoTop";
import SigninBody from "../JSX/SigninBody";

function SigninModal() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={{ style: myStyle }}>
      <SigninBody />
      <BacktoTop />
    </BaseLayout>
  );
}

export default SigninModal;
