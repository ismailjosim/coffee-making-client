import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AddCoffee from '../Pages/AddCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';
import Orders from '../Pages/Orders';
import Payment from '../components/Home/Payment';

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
            },
            {
                path: '/updateproduct/:id',
                element: <UpdateCoffee />
            },
            {
                path: '/orders',
                element: <Orders />
            },
            {
                path: '/payment/:id',
                element: <Payment />
            }
        ]
    }
])
