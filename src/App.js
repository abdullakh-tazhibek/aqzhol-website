import { Routes, Route } from "react-router-dom";

//main pages
import { Home } from "./pages/navMenu/Home";
import { Profile } from "./pages/navMenu/Profile";
import { Create } from "./pages/navMenu/Create";

//additional
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";

//auth
import { Login } from "./auth/Login";
import { Roles } from "./auth/Roles";
import { Registration } from "./auth/Registration";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />

        {/* Passenger */}
        {/* 
      <Route path="/send" element={<SendDelivery />} />
      <Route path="/find" element={<FindTaxi />} />
      */}

        {/* Driver */}
        {/* 
      <Route path="/take" element={<TakeDelivery />} />
      <Route path="/make" element={<MakeRide />} />
      */}

        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/roles" element={<Roles />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
