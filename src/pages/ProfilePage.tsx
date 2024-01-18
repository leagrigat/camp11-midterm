import React from 'react';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import Button from '../components/Button';

function ProfilePage() {
  const initialProfileData = {
    firstName: 'InitialFirstName', // Set your initial data here
    lastName: 'InitialLastName',
    // Add other shared initial data here
  };

  const handleProfileSubmit = formData => {
    // Handle form submission for profile data
    console.log('Profile data submitted:', formData);
    // Add logic to save/update profile data
  };

  return (
    <>
      <Header header="Profile"></Header>
      <ProfileForm
        initialData={initialProfileData}
        onSubmit={handleProfileSubmit}
      />
    </>
  );
}

export default ProfilePage;
