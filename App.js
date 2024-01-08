import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/app/Header";
import Body from "./src/app/Body";
import Footer from "./src/app/Footer";
import Contact from "./src/app/Contact";
// import About from "./src/app/About";
import Error from "./src/app/Error";
import Restaurant from "./src/app/Restaurant";

const root = ReactDOM.createRoot(document.getElementById("root"));
const About = lazy(() => import("./src/app/About"));

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
        element: (
          <Suspense fallback={<h1>About loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <Restaurant />,
      },
    ],
  },
]);

// root.render(divdiv);
root.render(<RouterProvider router={router} />);