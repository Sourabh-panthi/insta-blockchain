import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Header from "../components/Header";
import Photos from "../components/Profile/Photo";
const profile = () => {
  return (
    <>
      <Header />
      <ProfileHeader />
      <Photos />
    </>
  );
};

export default profile;
