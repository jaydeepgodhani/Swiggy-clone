import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/app/Header";
import Body from "./src/app/Body";
import Footer from "./src/app/Footer";
import Contact from "./src/app/Contact";
import About from "./src/app/About";
import Error from "./src/app/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  }
]);

// root.render(divdiv);
root.render(<RouterProvider router={router} />);