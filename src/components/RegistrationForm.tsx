import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegistrationForm() {
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
    <div>
      <form onSubmit={handleSubmit}>
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
          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
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
          onChange={e => setFormData({ ...formData, password: e.target.value })}
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

        <div className="absolute inset-x-0 bottom-8">
          <Button
            variant="primary"
            type="submit"
            children="Register"
            size="lg"
          />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
