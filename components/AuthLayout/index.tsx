import React from 'react';

type AuthLayoutProps = {
  children?: any;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
}

export default AuthLayout;
