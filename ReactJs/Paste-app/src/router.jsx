import { createBrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import Viewpaste from './components/Viewpaste'


const router = createBrowserRouter([
    {
        path: '/',
        element:
            <div>
                <Navbar />
                <Home />
            </div>
    },
    {
        path: '/paste',
        element:
            <div>
                <Navbar />
                <Paste />
            </div>
    },
    {
        path: '/paste/:id',
        element:
            <div>
                <Navbar />
                <Viewpaste />
            </div>
    },
])

export default router;