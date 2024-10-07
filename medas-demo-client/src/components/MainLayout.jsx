import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainLayout = ({ children, message }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar message={message} />
        <div className="flex-grow bg-gray-100 mt-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
