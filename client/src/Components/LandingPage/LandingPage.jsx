import React from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Redux/routes/action";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
// import RoutesModal from "./RoutesModal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LandingPage = () => {
  //modal items
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  var Routes = [
    ["Nairobi", "Mombasa", 12],
    ["Mombasa", "Nairobi", 3],
    ["Mombasa", "Kisumu", 4],
    ["Kisumu", "Mombasa", 3],
    ["Kitale", "Nairobi", 5],
    ["Nairobi", "Kitale", 3],
    ["Garisa", "Nairobi", 5],
    ["Nairobi", "Garisa", 3],
    ["Mombasa", "Lodwar", 3],
    ["Lodwar", "Mombasa", 5],
    ["Lodwar", "Nairobi", 5],
    ["Nairobi", "Lodwar", 5],
  ];
  const history = useNavigate();
  const [departure, setDeparture] = React.useState("");
  const [arrival, setArrival] = React.useState("");
  const [date, setDate] = React.useState("");
  const [filteredSources, setFilteredSources] = React.useState([]);
  const [filteredDestinations, setFilteredDestinations] = React.useState([]);
  const [displayDepartureDropdown, setDisplayDepartureDropdown] =
    React.useState(false);
  const [displayArrivalDropdown, setDisplayArrivalDropdown] =
    React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  const routes = useSelector((state) => state.routesReducer.routes);
  console.log("Routes are:", routes);

  const onDepartureChange = (e) => {
    let value = e.target.value;
    setDeparture(value);

    if (routes) {
      let allSources = [];
      routes.forEach((route) => {
        allSources.push(route.departureLocation.name);
        allSources = [
          ...allSources,
          route.departureLocation.name,
          ...route.departureLocation.subLocations,
        ];
      });
      allSources = Array.from(new Set(allSources));
      let filteredSources = allSources.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );
      // console.log("Can search: ", routes.length, filteredSources);
      if (filteredSources.length > 0 && value) {
        console.log("hey true");
        setFilteredSources(filteredSources);
        setDisplayDepartureDropdown(true);
      } else {
        setDisplayDepartureDropdown(false);
      }
    }
  };
  const onArrivalChange = (e) => {
    let value = e.target.value;
    setArrival(value);
    if (routes) {
      let allDestinations = [];
      routes.forEach((route) => {
        allDestinations.push(route.arrivalLocation.name);
        allDestinations = [
          ...allDestinations,
          route.arrivalLocation.name,
          ...route.arrivalLocation.subLocations,
        ];
      });
      allDestinations = Array.from(new Set(allDestinations));
      let filteredDestinations = allDestinations.filter((source) =>
        source.toLowerCase().includes(value.toLowerCase())
      );

      if (filteredDestinations.length > 0 && value) {
        setFilteredDestinations(filteredDestinations);
        setDisplayArrivalDropdown(true);
      } else {
        setDisplayArrivalDropdown(false);
      }
    }
  };

  return (
    <div>
      <div className={styles.LandingPage__mainBanner}>
        <div className={styles.LandingPage__form}>
          <div className={styles.LandingPage__form__departure}>
            <div className={styles.LandingPage__form__departure__input}>
              <input
                type="text"
                placeholder="Source"
                value={departure}
                onChange={onDepartureChange}
              />
            </div>
            {displayDepartureDropdown ? (
              <div className={styles.LandingPage__form__departure__dropdown}>
                <ul>
                  {filteredSources.map((source) => (
                    <li
                      onClick={() => {
                        setDeparture(source);
                        setDisplayDepartureDropdown(false);
                      }}
                    >
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__arrival}>
            <div className={styles.LandingPage__form__arrival__input}>
              <input
                type="text"
                placeholder="Destination"
                value={arrival}
                onChange={onArrivalChange}
              />
            </div>
            {displayArrivalDropdown ? (
              <div className={styles.LandingPage__form__arrival__dropdown}>
                <ul>
                  {filteredDestinations.map((destination) => (
                    <li
                      onClick={() => {
                        setArrival(destination);
                        setDisplayArrivalDropdown(false);
                      }}
                    >
                      {destination}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className={styles.LandingPage__form__date}>
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.LandingPage__form__button}>
            <button
              onClick={() => {
                let departureTemp = departure;
                let arrivalTemp = arrival;

                if (departureTemp.includes("(")) {
                  departureTemp = departureTemp.substring(
                    departureTemp.indexOf("(") + 1,
                    departureTemp.indexOf(")")
                  );
                }
                if (arrivalTemp.includes("(")) {
                  arrivalTemp = arrivalTemp.substring(
                    arrivalTemp.indexOf("(") + 1,
                    arrivalTemp.indexOf(")")
                  );
                }

                var result = false;
                for (var i = 0; i < Routes.length; i++) {
                  if (
                    Routes[i][0] === departureTemp &&
                    Routes[i][1] === arrivalTemp
                  ) {
                    result = true;
                  }
                }
                if (result === false) {
                  handleOpenModal();
                } else {
                  history.push(
                    `/select-bus?departure=${departureTemp}&arrival=${arrivalTemp}&date=${date}`
                  );
                }
              }}
            >
              Search Bus
            </button>
          </div>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openModal}
          onClose={handleCloseModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openModal}>
            <div className={classes.paper}>
              <p id="transition-modal-description">
                {/* <RoutesModal /> */}
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default LandingPage;
