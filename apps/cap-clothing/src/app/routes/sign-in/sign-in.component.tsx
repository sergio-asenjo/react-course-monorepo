import { createUserDocumentFromAuth, signInWithGooglePopup } from 'apps/cap-clothing/src/utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <button onClick={logGoogleUser}>
          Sign in with Google (Popup)
        </button>
      </div>
    </>
  )
}

export default SignIn;