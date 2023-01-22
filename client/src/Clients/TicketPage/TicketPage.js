import React from "react";
import "./TicketPage.css";
export default function TicketPage() {


  // const getLocationData = () => {
  //   let from = localStorage.getItem("start");
  //   let to = localStorage.getItem("destination");
  //   return (
  //     <div>
  //       <p style={{color: 'black'}} >From: {from}</p>
  //       <p style={{color: 'black'}} >To: {to}</p>
  //     </div>
  //   );
  // };
  const getPassengerName = () => {
    let nameArray = localStorage.getItem("nameData");
    let names = JSON.parse(nameArray);
    return names.map((name, idx) => {
      return (
        <div key={idx}>
          <p className="names">{name}</p>
        </div>
      );
    });
  };
  const getSeatNumbers = () => {
    let noArray = localStorage.getItem("reservedSeats");
    let arr = JSON.parse(noArray);
    return arr.map((element, idx) => {
      return (
        <div key={idx}>
          <p className="seatNo">{element}</p>
        </div>
      );
    });
  };
  const getIdNumber = () => {
    let tokenData = localStorage.getItem("selectedBusId");
    return <p className="idData">{tokenData}</p>;
  };

  const getDateValue = () => {
    let dat = localStorage.getItem("date");
    return <p style={{color: 'black'}} >On: {dat}, 10 AM (Hourly commute)</p>;
  };
  return (
    <div className="container">
      <div className="tpMain">
        <article className="ticket">
          <header className="ticket__wrapper">
            <div style={{color: 'black'}} className="ticket__header">1 🎟 Knight Travellers</div>
          </header>
          <div className="ticket__divider">
            <div className="ticket__notch"></div>
            <div className="ticket__notch ticket__notch--right"></div>
          </div>
          <div className="ticket__body">

            <section className="ticket__section">
            <p style={{color: 'black'}} >Booked Seats</p>
              {/* {getLocationData()} */}
              {getSeatNumbers()}
              <div style={{color: '#black'}} >
                Your seats are together <span>{getDateValue()}</span>
              </div>
            </section>
            <section className="ticket__section">
              <h3 style={{color: 'black'}} >Passenger Names</h3>
              {getPassengerName()}
            </section>
            <section className="ticket__section">
              <h3 style={{color: 'black'}} >Payment Method</h3>
              <p style={{color: 'black'}} >Credit Card</p>
            </section>
          </div>
          <footer className="ticket__footer">
            <p style={{color: 'black'}} >Transaction-ID</p>
            {getIdNumber()}
          </footer>
        </article>
      </div>
    </div>
  );
}