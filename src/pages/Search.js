import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ContentWrapper, Inner, Layout } from "../components/layout/Layout";
import ReservationBar from "../components/reservation/ReservationBar";
import AccommodationList from "../components/search/AccommodationList";
import FilterBox from "../components/search/FilterBox";
import ResultBar from "../components/search/ResultBar";
import { accommodationData } from "../data/accommodationData";

export default function Search() {
  const location = useLocation();

  const initialTown = location.state?.town || "";

  const [town, setTown] = useState(initialTown);
  const [dateRange, setDateRange] = useState(
    location.state?.dateRange || [null, null]
  );
  const [guests, setGuests] = useState(location.state?.guests || 1);

  const filteredList = town
  ? accommodationData.filter((item) => item.town === town)
  : accommodationData;

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
        <ResultBar count={filteredList.length} />

        <ContentWrapper>
          <FilterBox />
          <AccommodationList town={town} />
        </ContentWrapper>
      </Inner>
    </Layout>
  );
}
