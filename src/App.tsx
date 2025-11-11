import { useEffect, useState } from "react";
import { FlightboardContainer, FlightsList } from "./styles";
import type { Aircraft, AircraftResponse } from "./types";
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

    // get flight data every second
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

  const aircraftToShow = sortedAircraft.slice(0, 8);

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
