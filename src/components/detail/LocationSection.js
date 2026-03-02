import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  text-align: left;
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
`;

const Address = styled.p`
  margin-top: 10px;
  color: #555;
  text-align: left;
  font-size: 20px;
  font-weight: 600;

  div {
    white-space: pre-line;
    font-size: 16px;
    color: #666;
    font-weight: 500;
  }
`;
const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`;

export default function LocationSection({ location }) {
  if (!location) return null;

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  return (
    <Wrapper>
      <Title>위치</Title>

      <MapWrapper>
        <LoadScript
          googleMapsApiKey={apiKey}
        >
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </MapWrapper>
      <Address>
        {location.address}
        <div>{location.notice}</div>
      </Address>
    </Wrapper>
  );
}
