// imports react
import React from "react";
// imports the ThoughtList, FriendList, and ThoughtForm components
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendList";
import ThoughtForm from "../components/ThoughtForm";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
          {loggedIn && 'col-lg-8' (
            <div className="col-12 mb-3">
              <ThoughtForm />
            </div>
          )}
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
