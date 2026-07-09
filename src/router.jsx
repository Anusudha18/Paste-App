import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import Paste from "./Components/Paste";
import ViewPaste from "./Components/Viewpaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pastes",
        element: <Paste />,
      },
      {
        path: "pastes/:id",
        element: <ViewPaste />,
      },
    ],
  },
]);

export default router;