import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">404</h1>
        <h2 className="mt-4 text-2xl text-gray-800">Oops! Page Not Found.</h2>
        <p className="mt-2 text-gray-600">The page you are looking for does not exist or has been removed.</p>
        <div className="mt-2">
            <button className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none focus:shadow-outline' onClick={handleRedirect} >Anasayfaya Dön</button>
        </div>
    </div>
</div>
  )
}

export default NotFound