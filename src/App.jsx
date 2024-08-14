//import reactLogo from './assets/react.svg'
import * as React from "react";
//import * as ReactDOM from "react-dom/client"
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/home.jsx";
import OurStory from "./pages/OurStory.jsx";
import Careers from "./pages/Careers.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Join from "./pages/Joining.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/our-story",
    element: <OurStory />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/join",
    element: <Join />,
  },
]);

export default function App() {
  return (
    <>
      <MantineProvider>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </MantineProvider>
    </>
  );
}
