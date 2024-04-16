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
                            to="/home" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/users" className={({ isActive }) => isActive ? "nav-active" : ""}
                        >
                            Users
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
                path: "/home",
                index: true,
                element: <h1>Home - azure</h1>
            },
            {
                path: "about",
                element: <h1>About - azure</h1>
            },
            {
                path: "users",
                element: <h1>Users page  - azure</h1>,
            }

        ]
    },
    {
        path: "/*",
        element: <Navigate to="/home" replace={true} />
    }
]);


export const Navigation = () => {
    return (
        <RouterProvider router={router} />
    )
}
