
import React from 'react';

import SignupForm from '@/components/auth/Signup';

import image1 from "@/assets/image1.jpeg";

import Image from 'next/image';

const SignupPage: React.FC = () => {

  return (

    <div className="min-h-screen w-screen bg-gray-100 overflow-y-hidden mx-auto">

      <div className='flex relative w-full h-full overflow-y-hidden'>

        <div className='relative w-[50%] h-full overflow-hidden'>

          <Image src={image1} alt="" className='bg-cover w-full min-h-screen' />

        </div>

        <div className='relative w-[50%] h-full'>

          <SignupForm />

        </div>

      </div>

    </div>
  );
};

export default SignupPage;



