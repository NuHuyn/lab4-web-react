import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SidebarLayout from "./layout/SidebarLayout";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section5User from "./pages/Section5User";
import Section6 from "./pages/Section6";
import Section7 from "./pages/Section7";

// Section 8 – BlogDash
import Section8 from "./pages/Section8";
import BlogDashLogin from "./pages/BlogDashLogin";
import BlogDashDashboard from "./pages/BlogDashDashboard";
import BlogDashPostDetail from "./pages/BlogDashPostDetail";
import BlogProtectedRoute from "./components/BlogProtectedRoute";
import { BlogAuthProvider } from "./context/BlogAuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      // SECTION 1–7 (giữ nguyên như bạn có)
      { path: "section1", element: <Section1 /> },
      { path: "section2", element: <Section2 /> },
      { path: "section3", element: <Section3 /> },
      { path: "section4", element: <Section4 /> },
      { path: "section5", element: <Section5 /> },
      { path: "section5/user/:userId", element: <Section5User /> },
      { path: "section6", element: <Section6 /> },
      { path: "section7", element: <Section7 /> },

      // SECTION 8 – BlogDash
      { path: "section8", element: <Section8 /> },
      { path: "section8/login", element: <BlogDashLogin /> },

      {
        path: "section8/dashboard",
        element: (
          <BlogProtectedRoute>
            <BlogDashDashboard />
          </BlogProtectedRoute>
        ),
      },

      {
        path: "section8/dashboard/post/:postId",
        element: (
          <BlogProtectedRoute>
            <BlogDashPostDetail />
          </BlogProtectedRoute>
        ),
      },

      // Default route
      { index: true, element: <Section1 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogAuthProvider>
      <RouterProvider router={router} />
    </BlogAuthProvider>
  </React.StrictMode>
);
