import { Route, Routes } from "react-router-dom";
import SplashScreen from "../features/landingpage/splash/splash";
import LandingPage from "../features/landingpage/landingPage";
import { AppRoutes } from "./routes";

function ApplicationRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.SPLASH} element={<SplashScreen />} />
      <Route path={AppRoutes.HOME} element={<LandingPage />} />
    </Routes>
  );
}

export default ApplicationRouter;
