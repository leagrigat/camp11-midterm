import GreetingHeader from '../components/GreetingHeader';
import RegistrationForm from '../components/RegistrationForm';

function RegisterPage() {
  return (
    <div className="flex flex-col h-full">
      <GreetingHeader
        title="Join Cine-Scape Today!"
        description="Register now to enjoy all our services, including making reservations and adding movies to your watchlist."
      />
      <RegistrationForm />
    </div>
  );
}

export default RegisterPage;
