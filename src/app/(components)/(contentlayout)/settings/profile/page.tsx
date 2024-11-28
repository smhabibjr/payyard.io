"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';

const UserProfile = () => {
    const [hasBusinessProfile, setHasBusinessProfile] = useState(false)

    return (
        <Fragment>
            <Seo title={"Create Invoice"} />
            <Pageheader currentpage="Profile" activepage="Settings" mainpage="Profile" />
            <div className="min-h-screen">
                {/* Personal Information Section */}
                <div className="bg-white shadow rounded-lg mb-6 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="fullName" name="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
                    <input type="text" id="address" name="address" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                </div>
                <div className="mt-6">
                    {/* <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Personal Information
                    </button> */}
                    <button type="button" className="ti-btn !py-2 !px-4 !text-[0.75rem] !text-white !font-medium bg-primary"> Save Personal Information</button>

                </div>
                </div>
                
                {/* Business Profile Toggle */}
                <div className="bg-white shadow rounded-lg mb-6 p-6">
                <div className="flex items-center">
                    <input
                    id="hasBusinessProfile"
                    name="hasBusinessProfile"
                    type="checkbox"
                    checked={hasBusinessProfile}
                    onChange={(e) => setHasBusinessProfile(e.target.checked)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasBusinessProfile" className="ml-2 block text-sm text-gray-900">
                    I have a business profile
                    </label>
                </div>
                </div>
                
                {/* Business Information Section */}
                {hasBusinessProfile && (
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Business Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input type="text" id="businessName" name="businessName" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="businessLogo" className="block text-sm font-medium text-gray-700 mb-1">Business Logo</label>
                        <input type="file" id="businessLogo" name="businessLogo" accept="image/*" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
                        <input type="text" id="businessAddress" name="businessAddress" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="taxId" className="block text-sm font-medium text-gray-700 mb-1">Tax ID/VAT Number</label>
                        <input type="text" id="taxId" name="taxId" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <input type="url" id="website" name="website" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    </div>
                    <div className="mt-6">
                    {/* <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save Business Information
                    </button> */}
                    <button type="button" className="ti-btn !py-2 !px-4 !text-[0.75rem] !text-white !font-medium bg-primary"> Save Personal Information</button>
                    </div>
                </div>
                )}
            </div>
        </Fragment>
    )
}

export default UserProfile