"use client";

import React, { Fragment, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const LinkedBank = () => {
  const [isLinked, setIsLinked] = useState(false);

  return (
    <Fragment>
      <Seo title="Linked Bank" />
      <Pageheader
        currentpage="Linked Bank"
        activepage="Settings"
        mainpage="Linked Bank"
      />
      <div className="min-h-screen">
        {/* Linked Bank Information Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Bank Account Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="bankName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bank Name
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                placeholder="Enter your bank name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="Enter your account number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="ifscCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IFSC Code
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                placeholder="Enter IFSC code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="branchAddress"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Branch Address
              </label>
              <input
                type="text"
                id="branchAddress"
                name="branchAddress"
                placeholder="Enter branch address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="ti-btn !py-2 !px-4 !text-[0.75rem] !text-white !font-medium bg-primary"
            >
              Save Bank Information
            </button>
          </div>
        </div>

        {/* Link/Unlink Bank Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center">
            <input
              id="isLinked"
              name="isLinked"
              type="checkbox"
              checked={isLinked}
              onChange={(e) => setIsLinked(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="isLinked" className="ml-2 block text-sm text-gray-900">
              {isLinked
                ? "Unlink Bank Account"
                : "Link Bank Account to enable transactions"}
            </label>
          </div>
        </div>

        {/* Bank Linking Details */}
        {isLinked && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Linked Bank Details
            </h2>
            <p className="text-sm text-gray-600">
              Your bank account is successfully linked. You can now perform
              transactions securely.
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LinkedBank;