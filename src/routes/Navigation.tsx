import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    NavLink,
    Navigate,
} from "react-router-dom";

function Root() {
    return (

        <div className="main-layout">
            <nav>
                <img src={logo} alt="React log" />
                <ul>
                    <li>
                        <NavLink
                            to="/lazy1" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            Lazy 1
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/lazy2" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            Lazy 2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/lazy3" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            Lazy 3
                        </NavLink>
                    </li>
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
        children: [
            {
                path: "lazy1",
                index: true,
                element: <LazyPage1 />
            },
            {
                path: "lazy2",
                element: <LazyPage2 />
            },
            {
                path: "lazy3",
                element: <LazyPage3 />,
            }

        ]
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
