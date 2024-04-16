import logo from '../logo.svg';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    NavLink,
    Navigate,
} from "react-router-dom";
import { LazyRoutes } from './routes';

function Root() {
    return (

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log" />
                <ul>
                    {LazyRoutes.map((route, index) => (
                        <li key={index}>
                            <NavLink
                                to={route.path ? route.path : '/'}
                                className={({ isActive }) => isActive ? "nav-active" : ""}
                            >
                                {route.handle}
                            </NavLink>
                        </li>

                    ))}
                </ul>
            </nav>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: LazyRoutes
    },
    {
        path: "/*",
        element: <Navigate to="/lazy1" replace={true} />
    }
]);


export const Navigation = () => {
    return (
        <RouterProvider router={router} />
    )
}
