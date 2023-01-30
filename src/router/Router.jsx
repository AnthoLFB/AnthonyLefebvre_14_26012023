
import CreateEmployee from '../pages/CreateEmployee';
import EmployeeList from '../pages/EmployeeList';
import Error from '../pages/Error';
import Home from '../pages/Home';

import {createBrowserRouter, RouterProvider, useRouteError} from 'react-router-dom';

function Router()
{
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <TriggerAnError />,
            children: [
                {
                  path: "/",
                  element: <CreateEmployee />,
                },
                {
                    path: "/List",
                    element: <EmployeeList />,
                  },
              ],
        },
    ])

    return (<RouterProvider router={router} />)

}

function TriggerAnError()
{
    let error = useRouteError();
    return (<Error code={error.status} message={error.statusText || error.message}/>)
}

export default Router;