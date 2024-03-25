import { Login } from "./auth/Login";
import { Home } from "./pages/Home";

import { Roles } from "./auth/Roles";

export function App({ isLoggedIn }) {
  return (
    <div className="App">
      {/* {isLoggedIn ? <Home /> : <Login />} */}
      <Roles />
    </div>
  );
}
