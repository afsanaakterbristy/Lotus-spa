import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import router from './Router/Router';

function App() {
  return (
    <div className='container mx-auto' >
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
       position="top-center"
      />
       
     
    </div>
  );
}

export default App;
