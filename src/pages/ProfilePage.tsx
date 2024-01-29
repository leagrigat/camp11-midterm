import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import { Props } from '../components/HomePageHeader';
import { FormData } from '../components/ProfileForm';
import { BsMailbox } from 'react-icons/bs';

function ProfilePage({ name, avatarImg }: Props) {
  const [user, setUser] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
  console.log(user);

  useEffect(() => {
    const userId = '8985e017-6bf1-461d-ad6d-b2986d55e13c';

    axios
      .get(`http://localhost:8000/user/${userId}`)
      .then(response => {
        const user = response.data as FormData;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);

  // put initialProfileData in useState-Hook to display it if there is no other userData is

  const handleProfileSubmit = (formData: FormData) => {
    console.log(formData);
    // Add logic to send the updated profile data to the server if needed
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <div className="flex justify-center">
          {user !== null ? (
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
          initialData={user}
          onChange={setUser}
          onSubmit={handleProfileSubmit}
        />
      </div>
    </>
  );
}

export default ProfilePage;
