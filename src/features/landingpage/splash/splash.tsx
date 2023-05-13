import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";
import { AppRoutes } from "../../../navigation/routes";

function SplashScreen() {
  const route = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      route(AppRoutes.HOME);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-row justify-center items-center">
        <span className="text-[40px]">DEV</span>
        <span>
          <img src={"/logo_loader.svg"} className="h-[80px]" />
        </span>
        <span className="text-[40px]">7</span>
      </div>
    </div>
  );
}

export default SplashScreen;
