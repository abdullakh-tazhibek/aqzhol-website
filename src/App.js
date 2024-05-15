import { Routes, Route, Link } from "react-router-dom";

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

export function App({ user }) {
  return (
    <div className="App">
      {/* <Link to={user.phoneNumber?.length ? "/home" : "/login"} /> */}
      {/* WEB-APP ROUTES */}
      {/* 
        НЕГІЗГІ МОМЕНТТЕРДІ БІТКЕННЕН КЕЙІН, ТӨМЕНДЕГІНІ ЖАЗУ МІНДЕТТІ
        <Link to={user.phoneNumber?.length ? 'LINK_HERE' : '/login'}> 
      */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />

        {/* Passenger */}
        {/* 
      <Route path="/send" element={<SendDelivery />} />
      <Route path="/find" element={<FindTaxi />} />
      <Route path="/my-delivery" element={<MyDelivery />} /> 
      */}

        {/* Driver */}
        {/* 
      <Route path="/take" element={<TakeDelivery />} />
      <Route path="/make" element={<MakeRide />} />
      <Route path="/my-ride" element={<MyRide />} />
      */}

        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/register" element={<Roles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
