import { type FC } from "react";
import type { Aircraft } from "@/types";
import { FlightStripContainer } from "./styles";

type FlightStripProps = {
  aircraft: Aircraft;
};

const FlightStrip: FC<FlightStripProps> = ({ aircraft }) => {
  return <FlightStripContainer>{aircraft.flight}</FlightStripContainer>;
};

export default FlightStrip;
