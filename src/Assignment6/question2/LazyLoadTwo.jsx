import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
const Home = lazy(() => import("./Home"));
const AboutPage = lazy(() => import("./AboutPage"));
const Navbar = lazy(() => import("./Navbar"));
const AboutPageDetails = lazy(() => import("./AboutPageDetails"));

const LazyLoadTwo = () => {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/:aboutId" element={<AboutPageDetails />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default LazyLoadTwo;
