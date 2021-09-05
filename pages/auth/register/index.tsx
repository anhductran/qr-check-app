import React from 'react';
import AuthLayout from 'components/AuthLayout';

function Register() {
  return <div>Register</div>;
}

Register.getLayout = function getLayout(page: any) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
