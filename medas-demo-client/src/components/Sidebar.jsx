import { isAccessTokenStored } from '@/hooks/isAccessTokenStored';
import React from 'react';
import { FaHome, FaList, FaClipboard, FaChartBar, FaCog, FaSignOutAlt, FaQuestionCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/auth/login');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiration_date');
  }

  const isAuthenticated = isAccessTokenStored();

  return (
    <div className="w-1/6 bg-gray-950 text-white h-screen flex flex-col justify-between p-4">
      <div>
        <div className="flex items-center justify-center mb-8">
          <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
        </div>

        <nav>
          <ul>
            <li className="mb-6">
              <a href="/" className="flex items-center text-gray-300 hover:text-white">
                <FaHome className="mr-3" />
                Anasayfa
              </a>
            </li>
            <li className="mb-6">
              <a href="/intern/intern-list" className="flex items-center text-gray-300 hover:text-white">
                <FaList className="mr-3" />
                Stajyer Liste
              </a>
            </li>
            <li className="mb-6">
              <a href="/permission/permission-create" className="flex items-center text-gray-300 hover:text-white">
                <FaClipboard className="mr-3" />
                İzin Formu
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <FaChartBar className="mr-3" />
                Puantaj
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
      <hr className="border-1 h-px bg-white"/>
        <a href="#" className="flex items-center text-gray-300 mt-2 hover:text-white">
          <FaCog className="mr-3" />
          Ayarlar
        </a>
      </div>
      <div>
        <ul>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaQuestionCircle className="mr-3" />
              Yardım
            </a>
          </li>
          <li className="mb-6">
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <FaEnvelope className="mr-3" />
              İletişim
            </a>
          </li>
          <li>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="flex items-center text-red-500 hover:text-red-600">
                <FaSignOutAlt className="mr-3" />
                Çıkış Yap
              </button>
            ) : (
              <a href='/auth/login' className="flex items-center text-green-500 hover:text-green-600">
                <FaSignInAlt className="mr-3" />
                Giriş Yap
              </a>
            )}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Sidebar;