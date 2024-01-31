import Input from './Input';
import Button from './Button';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileSchema } from '../../server/schema/profileSchema';

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

type ProfileProps = {
  initialData: FormData;
  onChange: (user: FormData) => void;
  onSubmit: (data: FormData) => void;
};

function ProfileForm({ initialData, onSubmit, onChange }: ProfileProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(initialData);
  };
  // const { register, handleSubmit, setValue, formState } = useForm({
  //   resolver: zodResolver(profileSchema),
  //   defaultValues: initialData,
  // });

  // const handleFormSubmit = (data: FormData) => {
  //   onSubmit(data);
  // };

  // // Manually set values to trigger validation on input change
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setValue(name, value);
  // };

  return (
    <div className="flex flex-col h-full">
      <form
        onSubmit={e => handleSubmit(e)}
        // onSubmit={handleSubmit(handleFormSubmit)}
        // className="flex flex-col flex-grow gap-5 justify-between mb-[55px]"
      >
        <div className="flex flex-col gap-5">
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={initialData.firstName}
            onChange={e =>
              onChange({
                ...initialData,
                firstName: e.target.value,
              })
            }
            // {...register('firstName')}
            // onChange={handleInputChange}
          />
          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={initialData.lastName}
            onChange={e =>
              onChange({
                ...initialData,
                lastName: e.target.value,
              })
            }
            // {...register('lastName')}
            // onChange={handleInputChange}
          />
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Your Email"
            name="email"
            value={initialData.email}
            onChange={e =>
              onChange({
                ...initialData,
                email: e.target.value,
              })
            }
            // {...register('email')}
            // onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-5">
          <Button variant="secondary" size="sm">
            Change Password?
          </Button>
          <Button
            //onClick={handleSubmit}
            type="submit"
            variant="primary"
            size="sm"
            //disabled={formState.isSubmitting}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;

//=======================================

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import Input from './Input';
// import Button from './Button';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { profileSchema } from '../../server/schema/profileSchema';

// export type FormData = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

// type ProfileProps = {
//   initialData: FormData;
//   onSubmit: (data: FormData) => void;
// };

// function ProfileForm({ initialData, onSubmit }: ProfileProps) {
//   const { register, handleSubmit, setValue, formState } = useForm({
//     resolver: zodResolver(profileSchema),
//     defaultValues: initialData,
//   });

//   const handleFormSubmit = (data: FormData) => {
//     onSubmit(data);
//   };

//   // Manually set values to trigger validation on input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setValue(name, value);
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <form
//         onSubmit={handleSubmit(handleFormSubmit)}
//         className="flex flex-col flex-grow gap-5 justify-between mb-[55px]"
//       >
//         <div className="flex flex-col gap-5">
//           <Input
//             id="firstName"
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             {...register('firstName')}
//             onChange={handleInputChange}
//           />
//           <Input
//             id="lastName"
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             {...register('lastName')}
//             onChange={handleInputChange}
//           />
//           <Input
//             id="email"
//             type="email"
//             autoComplete="username"
//             placeholder="Your Email"
//             name="email"
//             {...register('email')}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="flex gap-5">
//           <Button variant="secondary" size="sm">
//             Change Password?
//           </Button>
//           <Button
//             type="submit"
//             variant="primary"
//             size="sm"
//             disabled={formState.isSubmitting}
//           >
//             Save Changes
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ProfileForm;
