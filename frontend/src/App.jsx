// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent.jsx";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound.jsx";
import FootballLayout from "./features/football/pages/FooballPage.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/football/*" element={<FootballLayout />} />
    </Routes>
  );
}

export default App;
