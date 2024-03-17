import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./src/app/Header";
import Body from "./src/app/Body";
import Footer from "./src/app/Footer";
import Contact from "./src/app/Contact";
// import About from "./src/app/About";
import Error from "./src/app/Error";
import Restaurant from "./src/app/Restaurant";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/app/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const About = lazy(() => import("./src/app/About"));

const AppLayout = () => {

  const [userName, setUserName] = useState("default");

  useEffect(()=> {
    setUserName("Jaydeep");
  }, [])

  return (
    <div>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <UserContext.Provider value={{ loggedInUser: "Naval Ravikant" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />
      },
    ],
  },
]);

// root.render(divdiv);
root.render(<RouterProvider router={router} />);