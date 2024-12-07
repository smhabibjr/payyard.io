"use client";

import React, { Fragment } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { FaFacebookMessenger, FaDiscord, FaTelegram  } from "react-icons/fa";

const Supports = () => {
  return (
    <Fragment>
      <Seo title="Support" />
      <Pageheader
        currentpage="Support"
        activepage="Help"
        mainpage="Settings"
      />
      <div className="min-h-screen bg-gray-100">
        {/* Urgent Facebook Message Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Urgent Support via Facebook
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            If you need urgent assistance, feel free to send us a message on our
            Facebook page. We’re here to help you as quickly as possible.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="ti-btn !py-2 !px-4 !text-[0.875rem] !text-white bg-primary flex items-center space-x-2"
            >
              <FaFacebookMessenger size={20} />
              <span>Message on Facebook</span>
            </a>
            <span className="text-sm text-gray-500">Response time: ~1 hour</span>
          </div>
        </div>

        {/* Community Hub Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Join Our Community Hub
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Connect with other users, get support, and engage with our
            community. Join our Discord server and Telegram group for updates
            and discussions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Discord */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white">
                <FaDiscord size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Discord</h3>
                <a
                  href="https://discord.com/invite/yourinvite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm underline hover:text-indigo-800"
                >
                  Join Now
                </a>
              </div>
            </div>
            {/* Telegram */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                <FaTelegram size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-800">Telegram</h3>
                <a
                  href="https://t.me/yourgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm underline hover:text-blue-700"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Supports;