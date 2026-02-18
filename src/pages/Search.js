import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ContentWrapper, Inner, Layout } from "../components/layout/Layout";
import ReservationBar from "../components/reservation/ReservationBar";
import AccommodationList from "../components/search/AccommodationList";
import FilterBox from "../components/search/FilterBox";
import ResultBar from "../components/search/ResultBar";
import { accommodationData } from "../data/accommodationData";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialTown = location.state?.town || "";

  const [town, setTown] = useState(initialTown);
  const [dateRange, setDateRange] = useState(
    location.state?.dateRange || [null, null]
  );
  const [guests, setGuests] = useState(location.state?.guests || 1);

  const [sortType, setSortType] = useState("recommend");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleFacility = (facility) => {
    setSelectedFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  const filteredList = accommodationData
    .filter((item) => (town ? item.town === town : true))
    .filter((item) =>
      selectedFacilities.length > 0
        ? selectedFacilities.every((f) => item.facilities.includes(f))
        : true
    )
    .filter((item) =>
      selectedTypes.length > 0 ? selectedTypes.includes(item.type) : true
    );

  const sortedList = [...filteredList].sort((a, b) => {
    switch (sortType) {
      case "lowPrice":
        return a.price - b.price;
      case "highPrice":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "review":
        return b.reviewCount - a.reviewCount;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <ReservationBar
        town={town}
        setTown={setTown}
        dateRange={dateRange}
        setDateRange={setDateRange}
        guests={guests}
        setGuests={setGuests}
      />

      <Inner>
        <ResultBar
          count={filteredList.length}
          sortType={sortType}
          setSortType={setSortType}
        />

        <ContentWrapper>
          <FilterBox
            selectedFacilities={selectedFacilities}
            toggleFacility={toggleFacility}
            selectedTypes={selectedTypes}
            toggleType={toggleType}
          />
          <AccommodationList
            list={sortedList}
            onCardClick={(id) => navigate(`/detail/${id}`)}
          />
        </ContentWrapper>
      </Inner>
    </Layout>
  );
}
