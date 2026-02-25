import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import BasicInfo from "../components/detail/BasicInfo";
import ExperienceList from "../components/detail/ExperienceList";
import ImageGallery from "../components/detail/ImageGallery";
import Description from "../components/detail/Description";
import LocationSection from "../components/detail/LocationSection";
import NoticeList from "../components/detail/NoticeList";
import ReservationBox from "../components/detail/ReservationBox";
import ReviewList from "../components/detail/ReviewList";
import RoomList from "../components/detail/RoomList";
import { accommodationData } from "../data/accommodationData";
import TopButton from "../components/common/TopButton";

const DetailContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function Detail() {
  const { id } = useParams();

  const location = useLocation();
  const town = location.state?.town;
  const dateRange = location.state?.dateRange; 
  const guests = location.state?.guests;

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedExperiences, setSelectedExperiences] = useState([]);

  const accommodation = accommodationData.find(
    (item) => item.id === Number(id)
  );

  const roomWithAccommodation = selectedRoom
    ? { ...selectedRoom, accommodationName: accommodation.name }
    : null;

  if (!accommodation) {
    return <div>존재하지 않는 숙소입니다.</div>;
  }

  return (
    <DetailContainer>
      <ImageGallery
        thumbnail={accommodation.thumbnail}
        images={accommodation.images}
      />

      <BasicInfo
        name={accommodation.name}
        type={accommodation.type}
        summary={accommodation.summary}
        rating={accommodation.rating}
        reviewCount={accommodation.reviewCount}
        price={accommodation.price}
        facilities={accommodation.facilities}
        address={accommodation.address}
        reviews={accommodation.reviews?.[0]?.content}
      />

      <Description text={accommodation.description} />

      <RoomList
        rooms={accommodation.rooms}
        selectedRoom={selectedRoom}
        onSelectRoom={setSelectedRoom}
      />

      <ExperienceList
        experiences={accommodation.experiences}
        selectedExperiences={selectedExperiences}
        setSelectedExperiences={setSelectedExperiences}
        selectedRoom={selectedRoom}
      />

      {selectedRoom && (
        <ReservationBox
          selectedRoom={roomWithAccommodation}
          selectedExperiences={selectedExperiences}
          setSelectedRoom={setSelectedRoom}
          setSelectedExperiences={setSelectedExperiences}
          town={town}
          dateRange={dateRange}
          guests={guests}
        />
      )}

      <LocationSection location={accommodation.location} />

      <NoticeList notices={accommodation.notices} />

      <ReviewList reviews={accommodation.reviews} />

      <TopButton />
    </DetailContainer>
  );
}
