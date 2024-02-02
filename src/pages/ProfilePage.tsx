import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import { FormData } from '../components/ProfileForm';
import { useEdgeStore } from '../context/EdgeStore';
import { SingleImageDropzone } from '../components/ImageUpload';
import { cn } from '../utils/cn';
import { toast } from 'react-toastify';

interface UserData extends FormData {
  avatar: string;
}

const diam = Math.floor((window.innerWidth / 320) * 125);

function ProfilePage() {
  const [user, setUser] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  });

  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

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
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);

  const handleProfileSubmit = async (formUser: FormData) => {
    const newData: UserData = {
      avatar: '',
      email: '',
      firstName: '',
      lastName: '',
    };
    Object.assign(newData, formUser);
    try {
      if (file) {
        if (user.avatar) {
          await edgestore.publicFiles.delete({
            url: user.avatar,
          });
        }

        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: progress => {
            // you can use this to show a progress bar
            console.log(progress);
          },
        });
        // you can run some server action or api here
        // to add the necessary data to your database
        console.log(res);
        newData.avatar = res.url;
      } else {
        newData.avatar = user.avatar;
      }
      await axios.put(`http://localhost:8000/user/`, newData, {
        headers: {
          accept: 'application/json',
        },
        withCredentials: true,
      });
      toast.success('Profile data updated successfully!');
    } catch (error) {
      toast.error('Error updating profile data, please try again later');
    }
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <div className="flex justify-center items-center">
          {user !== null ? (
            <>
              <img
                alt={user.firstName}
                src={user.avatar}
                className={cn(
                  diam >= 250 ? 'w-[250px] h-[250px]' : 'w-[125px] h-[125px]',
                  'rounded-full object-cover border border-solid border-gray-400 dark:border-gray-300'
                )}
              />
              <div className="text-4xl">{' => '}</div>
              <SingleImageDropzone
                width={diam >= 250 ? 250 : 125}
                height={diam >= 250 ? 250 : 125}
                value={file}
                onChange={file => {
                  setFile(file);
                }}
              />
            </>
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
