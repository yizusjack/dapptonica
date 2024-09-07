import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import LoginLayout from "./components/LoginLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;