import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import NavbarLayout from "../layout/NavbarLayout";
import CreateGroupPage from "../pages/CreateGroupPage";
import ErrorPage from "../pages/ErrorPage";
import GroupPage from "../pages/GroupPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import LandingPage from "../pages/LandingPage";
import RedirectLogin from "../feature/auth/RedirectLogin";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <RedirectLogin>
        <LandingPage />
      </RedirectLogin>
    ),
    children: [
      // { index: true, element: <LandingPage /> },
      // { path: "search", element: <SearchPage /> },
    ],
  },
  {
    path: "/",
    element: <NavbarLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <GroupPage /> },
      { path: "create", element: <CreateGroupPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "profile/:id", element: <ProfilePage /> },
      { path: "profile/:id/setting", element: <ProfilePage /> },
      { path: "/post", element: <PostPage /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
