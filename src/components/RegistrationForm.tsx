import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // handle the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-grow justify-between"
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
          <div className="flex gap-2 justify-end text-sm text-medium">
            <span className="text-white-dimmed">Already have an account?</span>
            <Link to={'/'} className="cursor-pointer underline text-primary">
              <span>Log In</span>
            </Link>
          </div>
        </div>
        <Button variant="primary" type="submit" children="Register" size="sm" />
      </form>
    </div>
  );
}

export default RegistrationForm;
