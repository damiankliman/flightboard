import { useEffect, useState } from "react";
import type { Aircraft, AircraftResponse } from "./types";
import { FlightboardContainer, FlightsList, Header, Footer } from "./styles";
import AirplaneIcon from "@/assets/airplane.svg?react";
import FlightStrip from "@/components/flight-strip";
import { calculateDistanceInKm } from "@/helpers/distance";
import { OUR_COORDINATES } from "@/constants/location";

const FLIGHT_DATA_REFRESH_INTERVAL = 1000;

function App() {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const aircraftApiUrl =
    import.meta.env.VITE_ADSB_DATA_API_URL || "http://localhost";

  useEffect(() => {
    const fetchAircraft = async () => {
      fetch(`${aircraftApiUrl}/tar1090/data/aircraft.json`)
        .then((response) => response.json())
        .then((data: AircraftResponse) => setAircraft(data.aircraft));
    };

    const interval = setInterval(() => {
      fetchAircraft();
    }, FLIGHT_DATA_REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [aircraftApiUrl]);

  const sortedAircraft = [...aircraft].sort((a, b) => {
    const distanceA =
      a.lat && a.lon
        ? calculateDistanceInKm(
            OUR_COORDINATES.lat,
            OUR_COORDINATES.lon,
            a.lat,
            a.lon
          )
        : Infinity;
    const distanceB =
      b.lat && b.lon
        ? calculateDistanceInKm(
            OUR_COORDINATES.lat,
            OUR_COORDINATES.lon,
            b.lat,
            b.lon
          )
        : Infinity;
    return distanceA - distanceB;
  });

  const aircraftToShow = sortedAircraft.slice(0, 6);

  return (
    <FlightboardContainer>
      <Header>
        <div>
          <AirplaneIcon />
          <h1>Flightboard</h1>
        </div>
        <div>
          <span>{aircraft.length} aircraft</span>
        </div>
      </Header>
      <FlightsList>
        {aircraftToShow.map((aircraft) => (
          <FlightStrip key={aircraft.hex} aircraft={aircraft} />
        ))}
      </FlightsList>
      <Footer>
        <span>Showing aircraft sorted by nearest distance</span>
        <span>•</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </Footer>
    </FlightboardContainer>
  );
}

export default App;
