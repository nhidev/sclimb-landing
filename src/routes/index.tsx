import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

const Home = lazy(() => import("../pages/Home"));

export const Router = () => {
  return (
    <Suspense fallback={<h3>Loading ...</h3>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};