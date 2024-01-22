import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';

function ProfilePage() {
  const initialProfileData = {
    //this is for default data
    firstName: 'Fluffy',
    lastName: 'Unicorn',
    email: 'fairyworld@bicycleDay.net',
  };

  const handleProfileSubmit = formData => {
    console.log(formData);
  };

  return (
    <>
      <div className="h-full flex flex-col justify-between gap-5">
        <Header header="Profile"></Header>
        <ProfileForm
          initialData={initialProfileData}
          onSubmit={handleProfileSubmit}
        />
      </div>
    </>
  );
}

export default ProfilePage;
