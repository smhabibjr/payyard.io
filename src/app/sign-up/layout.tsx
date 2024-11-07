import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2f7] to-[#f7f9fc] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Layout;
