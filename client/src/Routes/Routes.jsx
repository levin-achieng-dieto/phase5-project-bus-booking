import React from "react";
import { Route } from "react-router-dom";
import SelectBus from "../Components/BusDetails/SelectBus/SelectBus";
import BusBookingForm from "../Components/Bus Booking Form/BusBookingForm";
import LandingPage from "../Components/LandingPage/LandingPage";
const Routes = () => {
  return (
    <>
      <Routes>
      <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/select-bus" exact>
          <SelectBus />
        </Route>
        <Route path="/booking-form" exact>
          <BusBookingForm />
        </Route>
      </Routes>
    </>
  );
};

export default Routes;
