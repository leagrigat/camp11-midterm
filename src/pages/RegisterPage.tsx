import GreetingHeader from '../components/GreetingHeader';
import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TRegisterSchema, RegisterSchema } from '../validation/schemas';
import Input from '../components/Input';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEdgeStore } from '../context/EdgeStore';
import { SingleImageDropzone } from '../components/ImageUpload';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, touchedFields },
  } = useForm<TRegisterSchema>({
    mode: 'onTouched',
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
    },
  });

  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();

  // if the passwordRepeat has been touched and password is changed, re-evaluate passwordRepeat validity (took me hours to come up with this tiny bit of code...)

  useEffect(() => {
    if (touchedFields.passwordRepeat) {
      trigger('passwordRepeat');
    }
  }, [watch('password')]);

  const navigate = useNavigate();

  // handle submit

  const onSubmit = async (data: TRegisterSchema) => {
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      console.log(res); // handle the response data
      navigate('/');
      toast.success('Success Notification !', {
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ToastContainer />
      <GreetingHeader
        title="Join Cine-Scape Today!"
        description="Register now to enjoy all our services, including making reservations and adding movies to your watchlist."
      />
      <div>
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          onChange={file => {
            setFile(file);
          }}
        />
        <button
          onClick={async () => {
            if (file) {
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
            }
          }}
        >
          Upload
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-grow flex-col justify-between"
      >
        <div className="text-white-dimmed flex flex-col gap-3">
          <Input
            id="firstName"
            placeholder="First Name"
            autoComplete="given-name"
            type="text"
            error={errors.firstName}
            {...register('firstName')}
          />
          <Input
            id="lastName"
            placeholder="Last Name"
            autoComplete="family-name"
            type="text"
            error={errors.lastName}
            {...register('lastName')}
          />
          <Input
            id="email"
            placeholder="Your Email"
            autoComplete="email"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            id="password"
            placeholder="Your Password"
            autoComplete="new-password"
            type="password"
            error={errors.password}
            {...register('password')}
          />
          <Input
            id="passwordRepeat"
            placeholder="Your Password"
            autoComplete="new-password"
            type="password"
            error={errors.passwordRepeat}
            {...register('passwordRepeat')}
          />
        </div>
        <Button type="submit" size="sm">
          Register
        </Button>
      </form>
    </div>
  );
}

export default RegisterPage;
