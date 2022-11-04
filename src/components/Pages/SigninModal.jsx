import BaseLayout from "../Common/BaseLayout";
import SigninBody from "../JSX/SigninBody";

function SigninModal() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle}>
      <SigninBody />
    </BaseLayout>
  );
}

export default SigninModal;
