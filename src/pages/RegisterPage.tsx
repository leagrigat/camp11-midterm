import React, { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import Input from '../components/Input';
import Button from '../components/Button';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className=" h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-5">
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={e =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={e =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            placeholder="Your Password"
            name="password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Input
            id="passwordRepeat"
            type="password"
            autoComplete="new-password"
            placeholder="Repeat your Password"
            name="passwordRepeat"
            value={formData.passwordRepeat}
            onChange={e =>
              setFormData({ ...formData, passwordRepeat: e.target.value })
            }
          />
        </div>

        <Button variant="primary" type="submit" children="Register" size="lg" />
      </form>
    </div>
  );
}

export default RegisterPage;
