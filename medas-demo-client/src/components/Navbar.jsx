import { getFromAuth } from '@/api/user';
import { isAccessTokenStored } from '@/hooks/isAccessTokenStored';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar = ({ message }) => {

  const [user, setUser] = useState(null);
  const isAuthenticated = isAccessTokenStored();

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const response = await getFromAuth();
          setUser(response.data);
          console.log(user);
          
        } catch (error) {
          console.error("Kullanıcı bilgisi alınamadı", error);
        }
      }
    };
    fetchUserData();
  }, [isAuthenticated]);

  return (
    <div className="h-32 bg-white shadow-md flex items-center justify-between p-6">
      <div className="text-xl font-semibold">
        {message}
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-64 pl-10 pr-4 py-2 text-sm border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-500">
          <FaSearch className="h-5 w-5" />
        </span>
      </div>
      {isAuthenticated && user && ( 
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-500 focus:outline-none">
              <FaBell className="h-6 w-6" />
            </button>
            <span className="absolute top-0 right-0 block h-2.5 w-2.5 bg-red-600 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-700">{user.firstName} {user.lastName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;