import { loginUser } from '@/api/user';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(formData);
    
    if(res.status !== 200){
      toast.error(res.response.data.detail);
      return;
    }
    toast.success("Login Successfully");
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 mt-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-950 rounded-full text-white px-4 py-2 items-center hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <a
            href="/auth/register"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;