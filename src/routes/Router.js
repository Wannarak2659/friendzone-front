import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import HeaderLayout from "../layout/HeaderLayout";
import CreateGroupPage from "../pages/CreateGroupPage";
import ErrorPage from "../pages/ErrorPage";
import GroupPage from "../pages/GroupPage";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/landing",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "search", element: <SearchPage /> },
    ],
  },
  {
    path: "/",
    element: <GroupPage />,
    // errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <HomePage /> },
      //{ index: true, element: <HomePage /> },
      { path: "create-group", element: <CreateGroupPage /> },
      // { path: "post", element: <PostPage /> },
      // { path: "*", element: <Navigate to="/home" /> },
    ],
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    children: [
      { path: "profile/:id", element: <ProfilePage /> },
      { path: "profile/:id/setting", element: <ProfilePage /> },
    ],
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
