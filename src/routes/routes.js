import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AddCoffee from '../Pages/AddCoffee';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addproduct',
                element: <AddCoffee />
            }
        ]
    }
])
