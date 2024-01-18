import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function ProfileForm({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={e => handleChange('firstName', e.target.value)}
      />
      <Input
        id="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={e => handleChange('lastName', e.target.value)}
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
      <Button variant="secondary" size="sm">
        Change Password?
      </Button>
      <Button type="submit" variant="primary" size="sm">
        Save Changes
      </Button>
    </form>
  );
}

export default ProfileForm;
