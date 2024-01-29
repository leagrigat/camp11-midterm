import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import React from 'react';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

type ProfileProps = {
  initialData: FormData;
  onChange: (user: FormData) => void;
  onSubmit: (data: FormData) => void;
};

function ProfileForm({ initialData, onSubmit, onChange }: ProfileProps) {
  console.log(initialData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col h-full">
      <form
        onSubmit={e => handleSubmit(e)}
        className="flex flex-col flex-grow gap-5 justify-between mb-[55px]"
      >
        <div className="flex flex-col gap-5">
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={initialData.firstName}
            onChange={e =>
              onChange({
                ...initialData,
                firstName: e.target.value,
              })
            }
          />
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={initialData.lastName}
            onChange={e =>
              onChange({
                ...initialData,
                lastName: e.target.value,
              })
            }
          />
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Your Email"
            name="email"
            value={initialData.email}
            onChange={e =>
              onChange({
                ...initialData,
                email: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-5">
          <Button variant="secondary" size="sm">
            Change Password?
          </Button>
          <Button type="submit" variant="primary" size="sm">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
