import { type FC } from "react";
import type { Aircraft } from "@/types";
import { DataTile, FlightStripContainer } from "./styles";

type FlightStripProps = {
  aircraft: Aircraft;
};

const FlightStrip: FC<FlightStripProps> = ({ aircraft }) => {
  const dataTiles = [
    {
      label: "Callsign",
      value: aircraft.flight || "-",
    },
    {
      label: "Altitude",
      value: aircraft.alt_baro
        ? `${Number(aircraft.alt_baro).toFixed(0)}ft`
        : "-",
    },
    {
      label: "Speed",
      value: aircraft.gs ? `${aircraft.gs}kts` : "-",
    },
    {
      label: "Heading",
      value: aircraft.track ? `${Number(aircraft.track).toFixed(0)}°` : "-",
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
