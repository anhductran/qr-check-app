import React from 'react';

import AuthLayout from 'components/AuthLayout';

function Login() {
  return <div>Login</div>;
}

Login.getLayout = function getLayout(page: any) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
