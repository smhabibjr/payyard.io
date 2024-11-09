
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { payyard_logo_blue } from '../../../public/images';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 pb-4 justify-center">
        <Image src={payyard_logo_blue} alt="Payyard.io" width="50" />
        <h1 className="text-2xl font-bold text-[#3d83e4] my-auto">Payyard.io</h1>
      </div>

      <div className="text-sm font-light text-[#3e62aa] pb-8 mx-auto">
        Enter your email to reset your password.
      </div>
      
      <form className="flex flex-col" autoComplete="off">
        <div className="pb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#111827]">
            Email
          </label>
          <div className="relative text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4"
            />
          </div>
        </div>
        <button type="submit" className="w-full text-white bg-[#3e34fe] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
          Send Reset Link
        </button>
        <div className="text-sm font-light text-[#3e62aa] text-center">
          Remembered your password?{' '}
          <Link href="/sign-in" className="font-medium text-[#3e34fe] hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
