import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import BasicInfo from "../components/detail/BasicInfo";
import ExperienceList from "../components/detail/ExperienceList";
import ImageGallery from "../components/detail/ImageGallery";
import Description from "../components/detail/Description";
import FacilityList from "../components/detail/FacilityList";
import LocationSection from "../components/detail/LocationSection";
import NoticeList from "../components/detail/NoticeList";
import ReservationBox from "../components/detail/ReservationBox";
import ReviewList from "../components/detail/ReviewList";
import RoomList from "../components/detail/RoomList";
import { accommodationData } from "../data/accommodationData";

const DetailContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function Detail() {
  const { id } = useParams();

  const accommodation = accommodationData.find(
    (item) => item.id === Number(id)
  );

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
        rating={accommodation.rating}
        reviewCount={accommodation.reviewCount}
        price={accommodation.price}
      />

      <Description text={accommodation.description} />

      <RoomList rooms={accommodation.rooms} />

      <ExperienceList experiences={accommodation.experiences} />

      <FacilityList facilities={accommodation.facilities} />

      <LocationSection location={accommodation.location} />

      <NoticeList notices={accommodation.notices} />

      <ReviewList reviews={accommodation.reviews} />

      <ReservationBox accommodation={accommodation} />
    </DetailContainer>
  );
}
