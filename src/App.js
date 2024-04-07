import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { Login } from "./auth/Login";
import { Roles } from "./auth/Roles";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";

export function App({ isLoggedIn }) {
  return (
    <div className="App">
      {/* {isLoggedIn ? <Home /> : <Login />} */}

      <Routes>
        <Route path="/" element={<Home />} />
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

        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/register" element={<Roles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
