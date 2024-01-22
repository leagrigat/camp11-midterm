import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';

function ProfilePage() {
  const initialProfileData = {
    firstName: '', //this is for default data
    lastName: '',
    emai: '',
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
