import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Community from "../pages/community/Community";
import Settings from "../pages/settings/Settings";
import Chats from "../pages/chats/Chats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "/",
        element: <Chats />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
