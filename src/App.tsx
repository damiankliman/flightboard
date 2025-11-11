import { useEffect, useState } from "react";
import { FlightboardContainer, FlightsList } from "./styles";
import type { Aircraft, AircraftResponse } from "./types";
import FlightStrip from "./components/flight-strip";

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

    // get flight data every second
    const interval = setInterval(() => {
      fetchAircraft();
    }, FLIGHT_DATA_REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [aircraftApiUrl]);

  // get the first 8
  const aircraftToShow = [
    ...aircraft,
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
    {
      hex: "000000",
      type: "Aircraft",
      flight: "ACA1030",
      alt_baro: 10000,
      gs: 100,
      track: 100,
    },
  ].slice(0, 8);

  return (
    <FlightboardContainer>
      <FlightsList>
        {aircraftToShow.map((aircraft) => (
          <FlightStrip key={aircraft.hex} aircraft={aircraft} />
        ))}
      </FlightsList>
    </FlightboardContainer>
  );
}

export default App;
