import React from "react";
// useQuery hook enables queries
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Home;
