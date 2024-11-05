"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { logo } from '../../../public/images';

const ResetYourPasswordPage: React.FC = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      router.push('/sign-in'); // Redirect to the sign-in page
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl shadow-xl">
      <div className="flex items-center gap-3 pb-4 justify-center">
        <Image src={logo} alt="Logo" width="75" />
        <h1 className="text-2xl font-bold text-[#3d83e4] my-auto">FinTech</h1>
      </div>
      
      <div className="text-sm font-light text-[#3e62aa] pb-8 mx-auto">
        Create a new password that meets the security requirements.
      </div>

      <div className="text-xs text-red-600 mb-4">
        Passwords should be at least 8 characters long and should contain a mixture of letters, numbers, and other characters.
      </div>

      <form className="flex flex-col" autoComplete="off" onSubmit={handleSubmit}>
        <div className="pb-2">
          <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-[#111827]">
            New Password
          </label>
          <div className="relative text-gray-400">
            <input
              type="password"
              name="new-password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••••"
              className="pl-4 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4"
              required
            />
          </div>
        </div>

        <div className="pb-6">
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-[#111827]">
            Re-enter Password
          </label>
          <div className="relative text-gray-400">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••"
              className="pl-4 mb-2 bg-gray-50 text-gray-600 border border-gray-300 rounded-lg ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 w-full p-2.5 py-3 px-4"
              required
            />
          </div>
        </div>

        <button type="submit" className="w-full text-white bg-[#3e34fe] font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">
          Reset and Login
        </button>
        
        <div className="text-sm font-light text-[#3e62aa] text-center">
          Back to{' '}
          <Link href="/sign-in" className="font-medium text-[#3e34fe] hover:underline">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default ResetYourPasswordPage;
