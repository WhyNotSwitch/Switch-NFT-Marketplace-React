import BaseLayout from "../Common/BaseLayout";
import SignoutBody from "../JSX/SignoutBody";

function SignOut() {
  const myStyle = { paddingBottom: "90px" };
  return (
    <BaseLayout navProp={myStyle} >
      <SignoutBody />
    </BaseLayout>
  );
}

export default SignOut;
