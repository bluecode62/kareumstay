import React from 'react'
import { ClassData } from '../data/tourMenu'
import TourItem from '../components/common/page/TourItem';

export default function TourIntro() {
  const tour = ClassData[0];  

  return (
    <div>
      {tour && <TourItem {...tour} />}
    </div>
  );
}
