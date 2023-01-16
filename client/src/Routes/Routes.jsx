import React from "react";
import { Route } from "react-router-dom";
import SelectBus from "../Components/BusDetails/SelectBus/SelectBus";
import BusBookingForm from "../Components/Bus Booking Form/BusBookingForm";
const Routes = () => {
  return (
    <>
      <Routes>
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
