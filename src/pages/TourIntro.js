import React from 'react'
import { ClassData, EventData, GuideData } from '../data/tourMenu'
import TourItem from '../components/common/page/TourItem';
import { useParams } from 'react-router-dom';
import TopButton from '../components/common/TopButton';

export default function TourIntro() {
  const {type} = useParams();

  let tourData;

  if(type === "class") {
    tourData = ClassData[0];
  } else if (type === "event") {
    tourData = EventData[0];
  }else if (type === "guide") {
    tourData = GuideData[0];
  } else {
    tourData = null;
  }

  if (!tourData) return <div>데이터 없음</div>

  return (
    <div>
      <TourItem {...tourData} />
      <TopButton />

    </div>
  );
}
