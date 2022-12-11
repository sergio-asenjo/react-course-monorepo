import { createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect } from 'apps/cap-clothing/src/utils/firebase/firebase.utils';
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const logGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const logUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in-container flex-col">
      <h2 className="sign-in-header">I already have an account</h2>
      <div className="flex-col">
        <form onSubmit={handleSubmit} className="sign-in-form flex-col">
          <FormInput label="Email"
            type="email"
            required={true}
            autoComplete="email"
            name="email"
            onChange={handleChange}
            value={email}
          />

          <FormInput label="Password"
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
              label="Sign In with Google"
              buttonType="google"
              onClick={logUserRedirect}
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
