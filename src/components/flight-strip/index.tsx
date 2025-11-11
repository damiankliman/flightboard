import { type FC } from "react";
import type { Aircraft } from "@/types";
import { DataTile, FlightStripContainer } from "./styles";
import { calculateDistanceInKm } from "@/helpers/distance";
import { OUR_COORDINATES } from "@/constants/location";

type FlightStripProps = {
  aircraft: Aircraft;
};

const FlightStrip: FC<FlightStripProps> = ({ aircraft }) => {
  const dataTiles = [
    {
      label: "Callsign",
      value: aircraft.flight || "NO CALLSIGN",
    },
    {
      label: "Altitude",
      value: aircraft.alt_baro
        ? `${Number(aircraft.alt_baro).toFixed(0)}ft`
        : "-",
    },
    {
      label: "Speed",
      value: aircraft.gs ? `${Number(aircraft.gs).toFixed(0)}kts` : "-",
    },
    {
      label: "Heading",
      value: aircraft.track ? `${Number(aircraft.track).toFixed(0)}°` : "-",
    },
    {
      label: "Distance",
      value:
        aircraft.lat && aircraft.lon
          ? `${calculateDistanceInKm(
              OUR_COORDINATES.lat,
              OUR_COORDINATES.lon,
              aircraft.lat,
              aircraft.lon
            ).toFixed(1)}km`
          : "-",
    },
  ];

  return (
    <FlightStripContainer>
      {dataTiles.map((tile) => (
        <DataTile key={tile.label}>
          <span>{tile.value}</span>
        </DataTile>
      ))}
    </FlightStripContainer>
  );
};

export default FlightStrip;
