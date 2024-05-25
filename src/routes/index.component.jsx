// Route Dependencies
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Contexts
import { LocationProvider } from "../contexts/location.context";
import { ForecastProvider } from "../contexts/forecast.context";

// Route Components
import NotFoundRoute from "./not-found.component";
import LandingRoute from "../features/landing/routes/landing.routes";
import HomeRoute from "../features/home/routes/home.routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <LocationProvider>
        <ForecastProvider>
        <Routes>
          <Route path="/" element={<LandingRoute />} />
          <Route path="/home" element={<HomeRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
        </ForecastProvider>
      </LocationProvider>
    </BrowserRouter>
  );
};
