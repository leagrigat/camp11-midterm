import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';
import { Props } from '../components/HomePageHeader';
import { FormData } from '../components/ProfileForm';

function ProfilePage({ name, avatarImg }: Props) {
  const initialProfileData = {
    //this is for default data
    firstName: 'Fluffy',
    lastName: 'Unicorn',
    email: 'fairyworld@bicycleDay.net',
  };

  const handleProfileSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <div className="flex justify-center">
          {' '}
          <img
            alt={name}
            src="https://source.unsplash.com/random/?person" //<-- should be replaced by that-> {avatarImg}
            className="flex-grow-1 w-[220px] h-[220px] rounded-full object-cover"
          />
        </div>
        <ProfileForm
          initialData={initialProfileData}
          onSubmit={handleProfileSubmit}
        />
      </div>
    </>
  );
}

export default ProfilePage;
