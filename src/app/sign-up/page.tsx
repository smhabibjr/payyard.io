import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import { logo } from '../../../public/images';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 pb-4 justify-center">
        <Image src={logo} alt="Logo" width="75" />
        <h1 className="text-2xl font-bold text-[#3d83e4] my-auto">FinTech</h1>
      </div>

      <div className="text-sm font-light text-[#3e62aa] pb-8 mx-auto">
        Create a new account on FinTech.
      </div>
      
      <div className="text-xs text-red-600 mb-4">
        Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.
      </div>
      
      <form className="flex flex-col" autoComplete="off">
        <div className="pb-2">
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
            <input type="email" name="email" id="email" className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4" placeholder="name@company.com" />
          </div>
        </div>
        
        <div className="pb-2">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#111827]">
            Password
          </label>
          <div className="relative text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M12 8v8" />
                <path d="m8.5 14 7-4" />
                <path d="m8.5 10 7 4" />
              </svg>
            </span>
            <input type="password" name="password" id="password" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4" />
          </div>
        </div>

        <div className="pb-6">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-[#111827]">
            Confirm Password
          </label>
          <div className="relative text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-asterisk">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M12 8v8" />
                <path d="m8.5 14 7-4" />
                <path d="m8.5 10 7 4" />
              </svg>
            </span>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••••" className="pl-12 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4" />
          </div>
        </div>

        <button type="submit" className="w-full text-white bg-[#3e34fe] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
          Sign Up
        </button>
        <div className="text-sm font-light text-[#3e62aa] text-center">
          Already have an account?{' '}
          <Link href="/sign-in" className="font-medium text-[#3e34fe] hover:underline">Login</Link>
        </div>
      </form>

      <div className="relative flex py-8 items-center">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 font-medium text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <form>
        <div className="flex flex-row gap-2 justify-center">
          <button className="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="font-medium mx-auto">Github</span>
          </button>
          <button className="flex flex-row w-32 gap-2 bg-gray-600 p-2 rounded-md text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-X">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span className="font-medium mx-auto">Google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
