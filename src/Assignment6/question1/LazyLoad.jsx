import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./Home"));
const AboutPage = lazy(() => import("./AboutPage"));
const Navbar = lazy(() => import("./Navbar"));
const AboutPageDetails = lazy(() => import("./AboutPageDetails"));

const LazyLoad = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/:aboutId" element={<AboutPageDetails />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default LazyLoad;
