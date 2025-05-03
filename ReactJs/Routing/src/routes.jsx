import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'
import Coding from './Pages/Coding'
import Management from './Pages/Management'
import College from './Pages/College'
import Courses from './Pages/Courses'
import COmmunity from './Pages/COmmunity'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: 'dashboard/courses', element: <Courses /> },
            { path: 'dashboard/courses/coding', element: <Coding /> },
            { path: 'dashboard/courses/management', element: <Management /> },
            { path: 'dashboard/college', element: <College /> },
            { path: 'dashboard/community', element: <COmmunity /> },
            { path: "page1", element: <Page1 /> },
            { path: "page2", element: <Page2 /> }
        ]
    }
])

export default router