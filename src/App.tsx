import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Batter,
  Coach,
  Game,
  Home,
  Login,
  Phase,
  Pitcher,
  Position,
  Province,
  Stadium,
  Team,
  Users,
} from "./containers";
import { APP_ROUTES } from "./modules/app/constants";
import { UserProvider } from "./modules/user/contexts";

const router = createBrowserRouter([
  {
    path: APP_ROUTES.ROOT,
    element: <Login />,
  },
  { path: APP_ROUTES.BATTER, element: <Batter /> },
  { path: APP_ROUTES.COACH, element: <Coach /> },
  { path: APP_ROUTES.GAME, element: <Game /> },
  { path: APP_ROUTES.HOME, element: <Home /> },
  { path: APP_ROUTES.PHASE, element: <Phase /> },
  { path: APP_ROUTES.PITCHER, element: <Pitcher /> },
  { path: APP_ROUTES.POSITION, element: <Position /> },
  { path: APP_ROUTES.PROVINCE, element: <Province /> },
  { path: APP_ROUTES.STADIUM, element: <Stadium /> },
  { path: APP_ROUTES.TEAM, element: <Team /> },
  { path: APP_ROUTES.USER, element: <Users /> },
]);

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}
