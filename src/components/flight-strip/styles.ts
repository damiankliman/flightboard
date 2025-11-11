import styled from "styled-components";

export const FlightStripContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  &:not(:last-child) {
    border-bottom: none;
  }

  &:first-child {
    border-top: none;
  }

  > div:nth-child(1) {
    width: 25%;
  }
  > div:nth-child(2) {
    width: 20%;
  }
  > div:nth-child(3) {
    width: 20%;
  }
  > div:nth-child(4) {
    width: 20%;
  }
`;

export const DataTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: #9ad4e2;
    font-weight: 600;
    font-size: 27px;
  }
`;
