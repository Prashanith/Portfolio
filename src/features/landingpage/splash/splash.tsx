import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./splash.css";
import { AppRoutes } from "../../../navigation/routes";
import { motion } from "framer-motion";

function SplashScreen() {
  const route = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      route(AppRoutes.HOME);
    }, 1500);
  }, []);

  return (
    <motion.div
    initial={{scale:1}}
    animate={{scale:1.5}}
    transition={{delay:0, duration:2, type:"spring", stiffness:880}}
    className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-row justify-center items-center">
        <span className="text-[40px]">DEV</span>
        <span>
          <img src={"/logo_loader.svg"} className="h-[80px]" />
        </span>
        <span className="text-[40px]">7</span>
      </div>
    </motion.div>
  );
}

export default SplashScreen;
