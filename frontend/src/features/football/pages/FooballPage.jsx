import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import SportsBar from "../../../components/SportsBar";
import SportsNewsPage from "../../../pages/SportsNewsPage";
import SportsMatchPage from "../../../pages/SportsMatchPage";
import FixturesAndResults from "../../components/FixturesAndResults";
const FootballLayout = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen ">
        {/* Navigation */}
        <Navbar />
        <SportsBar />

        <Routes>
          <Route path="/" element={<Navigate to="news" />} />{" "}
          {/* Default route */}
          <Route path="news" element={<SportsNewsPage />} />
          <Route path="match" element={<SportsMatchPage />} />
          <Route path="stats" element={<FixturesAndResults />} />
        </Routes>
      </div>
    </>
  );
};

export default FootballLayout;
