import React from 'react'
import { useParams } from 'react-router-dom'
import BasicInfo from '../components/detail/BasicInfo';
import ExperienceList from '../components/detail/ExperienceList';
import ImageGallery from '../components/detail/ImageGallery';
import LocationSection from '../components/detail/LocationSection';
import NoticeList from '../components/detail/NoticeList';
import ReservationBox from '../components/detail/ReservationBox';
import ReviewList from '../components/detail/ReviewList';
import RoomList from '../components/detail/RoomList';
import { accommodationData } from '../data/accommodationData'

export default function Detail() {
  const {id} = useParams();

  const accommodation = accommodationData.find(
    (item) => item.id === Number(id)
  );
  
  if(!accommodation){
    return <div>존재하지 않는 숙소입니다.</div>
  }

  return (
    <div className='detail-container'>
      <ImageGallery images={accommodation.images} />

      <BasicInfo
        name={accommodation.name}
        rating={accommodation.rating}
        reviewCount={accommodation.reviewCount}
        price={accommodation.price}
      />

      <Description text={accommodation.description} />

      <RoomList rooms={accommodation.rooms}/>

      <ExperienceList experiences={accommodation.experiences} />

      <FacilityList facilities={accommodation.facilities} />

      <LocationSection location={accommodation.location} />

      <NoticeList notices={accommodation.notices} />

      <ReviewList reviews={accommodation.reviews} />

      <ReservationBox accommodation={accommodation} />
    </div>
  )
}
