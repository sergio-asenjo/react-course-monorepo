import {
  auth,
  createUserDocumentFromAuth,
} from 'apps/cap-clothing/src/utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  useEffect(() => {
    async function getResult() {
      const result = await getRedirectResult(auth);
      if (result) {
        await createUserDocumentFromAuth(result.user);
      }
    }
    getResult();
  }, []);

  

  return (
    <div className="sign-in-up">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
