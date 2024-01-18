import Header from '../components/Header';
import ProfileForm from '../components/ProfileForm';

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
