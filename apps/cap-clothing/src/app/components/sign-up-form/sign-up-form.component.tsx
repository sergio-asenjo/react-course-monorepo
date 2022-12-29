import { capitalize } from 'apps/cap-clothing/src/utils/string.utils';
import { createNewUserWithEmailAndPassword, createUserDocumentFromAuth } from 'apps/cap-clothing/src/utils/firebase/firebase.utils';
import { ChangeEvent, FormEvent, useState } from 'react';

import { FirebaseError } from 'firebase/app';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.styles.scss';

interface formValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const defaultForm: formValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<formValues>(defaultForm);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      setIsLoading(true);
      try {
        const response = await createNewUserWithEmailAndPassword(email, password);
        if (response) {
          await createUserDocumentFromAuth(response.user, displayName);
          setFormValues(defaultForm);
        }
      } catch (error) {
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Email already in use');
          }
        }
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="sign-up-container flex-col">
      <h1 className="sign-up-header">Don't have an Account?</h1>
      <form onSubmit={handleSubmit} className="sign-up-form flex-col">

        <FormInput label="Name"
          type="text"
          required={true}
          autoComplete="name"
          name="displayName"
          onChange={handleChange}
          value={capitalize(displayName)}
        />

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
          autoComplete="new-password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput label="Confirm Password" 
          type="password"
          required={true}
          autoComplete="off"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button label="Register with email" type="submit" isLoading={isLoading} buttonType="inverted" />
      </form>
    </div>
  );
};

export default SignUpForm;