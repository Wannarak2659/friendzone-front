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
import ProtectedRoute from "../feature/auth/ProtectedRoute";
import TogglePost from "../pages/TogglePost";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <RedirectLogin>
        <LandingPage />
      </RedirectLogin>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NavbarLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <GroupPage />,
      },
      { path: "create", element: <CreateGroupPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "group/:id", element: <PostPage /> },
      // { path: "profile/:id/setting", element: <ProfilePage /> },
      { path: "/post", element: <PostPage /> },
      { path: "/toggle", element: <TogglePost /> },
      { path: "*", element: <Navigate to="/home" /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
