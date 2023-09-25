import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const Router = () => {
  return (
    <Suspense fallback={<></>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};