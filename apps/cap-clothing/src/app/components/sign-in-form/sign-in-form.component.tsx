import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect,
} from 'apps/cap-clothing/src/utils/firebase/firebase.utils';
import { FirebaseError } from 'firebase/app';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';

interface signInForm {
  email: string;
  password: string;
}

const SignInForm = () => {
  const defaultForm: signInForm = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState<signInForm>(defaultForm);
  const { email, password } = formValues;

  const resetForm = () => {
    setFormValues(defaultForm);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGoogleRedirect();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.debug(response);
      resetForm();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/wrong-password': alert('Wrong password'); break;
          case 'auth/user-not-found': alert('User not found'); break;
          default: alert('Something went wrong'); break;
        }
      }
      console.warn(error);
    }
  };

  return (
    <div className="sign-in-container flex-col">
      <h2 className="sign-in-header">I already have an account</h2>
      <div className="flex-col">
        <form onSubmit={handleSubmit} className="sign-in-form flex-col">
          <FormInput
            label="Email"
            type="email"
            required={true}
            autoComplete="email"
            name="email"
            onChange={handleChange}
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required={true}
            autoComplete="off"
            name="password"
            onChange={handleChange}
            value={password}
          />

          <div className="buttons flex-row">
            <Button label="Sign In with Email" buttonType="inverted" />
            <Button
              type="button"
              label="Sign In with Google"
              buttonType="google"
              onClick={signInWithGoogle}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
