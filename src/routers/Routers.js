import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
    {
        element: (
            <>
                <Outlet />
            </>
        ),
        children: [
            {
                path: '/',
                element: <App />,
            },
    ],
    },
]);

