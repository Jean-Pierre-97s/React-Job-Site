import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '../components/Navbar' 

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <ToastContainer />
    </>
  )
}

export default MainLayout