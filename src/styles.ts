import styled from "styled-components";

export const FlightboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FlightsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    color: #9ad4e2;
    fill: #9ad4e2;
    width: 30px;
    height: 30px;
  }

  h1 {
    color: #9ad4e2;
    font-size: 32px;
    margin: 0;
  }

  span {
    color: #586b80;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: auto;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  > span {
    font-size: 16px;
    color: #586b80;
  }
`;
