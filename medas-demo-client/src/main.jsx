import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ToastContainer } from 'react-toastify'
import './assets/css/tailwind.css';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={routes} />
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)
