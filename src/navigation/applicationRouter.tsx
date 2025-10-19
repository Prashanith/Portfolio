import { Route, Routes } from "react-router-dom";
import SplashScreen from "../features/landingpage/splash/splash";
import LandingPage from "../features/landingpage/landingPage";
import { AppRoutes } from "./routes";
import BeyondCode from "../features/beyondCode/beyondCode";

function ApplicationRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.SPLASH} element={<SplashScreen />} />
      <Route path={AppRoutes.HOME} element={<LandingPage />} />
      <Route path={AppRoutes.BEYONDCODE} element={<BeyondCode />} />
    </Routes>
  );
}

export default ApplicationRouter;
