import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePageHeader() {
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/`, {
        headers: {
          accept: 'application/json',
        },
        withCredentials: true,
      })
      .then(response => {
        setName(response.data.firstName);
        setAvatar(response.data.avatar);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);
  return (
    <div className="font-bold w-full h-[44px] flex justify-between items-center">
      <div>
        <h1 className="text-xs text-white-dimmed">Welcome {name} 👋</h1>
        <h2 className="text-sm text-white">Let’s relax and watch a movie!</h2>
      </div>
      <img
        alt={name}
        src={avatar ? avatar : 'https://source.unsplash.com/random/?person'}
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
    </div>
  );
}

export default HomePageHeader;
