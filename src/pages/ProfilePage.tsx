import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import { Props } from '../components/HomePageHeader';
import { FormData } from '../components/ProfileForm';
import { BsMailbox } from 'react-icons/bs';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

function ProfilePage({ name, avatarImg }: Props) {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Replace 'userId' with the actual user ID you want to retrieve
    const userId = 1;

    axios
      .get(`/api/user/${userId}`)
      .then(response => {
        const userData = response.data as UserData;
        setUser(userData);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);

  const initialProfileData = {
    // This is DummyData, will be overridden if user data is available
    firstName: 'Fluffy',
    lastName: 'Unicorn',
    email: 'fairyworld@bicycleDay.net',
  };

  const handleProfileSubmit = (formData: FormData) => {
    console.log(formData);
    // Add logic to send the updated profile data to the server if needed
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <div className="flex justify-center">
          {user ? (
            <img
              alt={name}
              src={`https://source.unsplash.com/random/?person`} // <-- Adjust as needed, should be replaced by that-> {avatarImg}
              className="w-[220px] h-[220px] rounded-full object-cover"
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <ProfileForm
          initialData={user || initialProfileData}
          onSubmit={handleProfileSubmit}
        />
      </div>
    </>
  );
}

export default ProfilePage;
