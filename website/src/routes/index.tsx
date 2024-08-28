import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
];

export default createBrowserRouter(routes);
