import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ContentWrapper, Layout } from "../components/layout/Layout";
import ReservationBar from "../components/reservation/ReservationBar";
import FilterBox from "../components/search/FilterBox";
import ResultBar from "../components/search/ResultBar";


export default function Search() {
  const location = useLocation();

  const [town, setTown] = useState(location.state?.town || "");
  const [dateRange, setDateRange] = useState(location.state?.dateRange || [null, null]);
  const [guests, setGuests] = useState(location.state?.guests || 1);

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
      <ResultBar />

      <ContentWrapper>
          <FilterBox />
      </ContentWrapper>
    </Layout>
  );
}
