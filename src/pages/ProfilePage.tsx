import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import { Props } from '../components/HomePageHeader';
import { FormData } from '../components/ProfileForm';
import { profileSchema } from '../../server/schema/profileSchema';

interface UserData extends FormData {
  avatar: string;
}

function ProfilePage({ name, avatarImg }: Props) {
  const [user, setUser] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/`, {
        headers: {
          accept: 'application/json',
        },
        withCredentials: true,
      })
      .then(response => {
        const user = response.data as UserData;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);

  const handleProfileSubmit = async (user: FormData) => {
    try {
      await axios.put(`http://localhost:8000/user/`, user, {
        headers: {
          accept: 'application/json',
        },
        withCredentials: true,
      });

      console.log('Profile data updated successfully!');
    } catch (error) {
      console.error('Error updating profile data:', error);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <div className="flex justify-center">
          {user !== null ? (
            <img
              alt={name}
              src={user.avatar} // <-- Adjust as needed, should be replaced by that-> {avatarImg}
              className="w-[220px] h-[220px] rounded-full object-cover"
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <ProfileForm
          initialData={user}
          //onChange={setUser}
          onSubmit={handleProfileSubmit}
        />
      </div>
    </>
  );
}

export default ProfilePage;
