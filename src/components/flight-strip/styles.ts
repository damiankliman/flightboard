import styled from "styled-components";

export const FlightStripContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  &:nth-child(n + 6) {
    border-bottom: none;
  }

  > div:nth-child(1) {
    width: 30%;
  }
  > div:nth-child(2) {
    width: 16%;
  }
  > div:nth-child(3) {
    width: 16%;
  }
  > div:nth-child(4) {
    width: 16%;
  }
  > div:nth-child(5) {
    width: 22%;
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
